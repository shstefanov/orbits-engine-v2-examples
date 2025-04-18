import React, { useEffect, useState, useMemo } from "react";

import { input } from "../examples/utils/controlHelpers.jsx";

import { Mesh, BufferGeometry, MeshBasicMaterial } from "@orbits/engine";

// !!! Warning, Experiment !!! Imports module far outside project !!!
import Grid from "../../../../lib/orbits-generator/src/lib/Grid";




export default function VoxelTest(){

    const [ range, setRange ] = useState(1);




    return <>



        <Voxels

            position = {{ x: 0, y: 0, z: 0 }}

            bounds   = {{ x: [-50, 50], y: [-50, 50], z: [-50, 50] }}

            cellSize = { 1 }

            range = { range }
        
        
        />
    
        <h1>Voxels</h1>

        <div className="controls-block">
            {/* <p> { input( "Wireframe",       { checkbox: true                          }, wireFrame,      setWireframe      ) } </p> */}
            <p> { input( "Range",          { range: [ 1, 51 * 51 * 51,    1 ],   type: "int"   }, range,         setRange, {width: "900px"}         ) } </p>
        </div>
    
    </>;
}






const A = { u: 0, v: 0 };
const B = { u: 1, v: 0 };
const C = { u: 1, v: 1 };
const D = { u: 0, v: 1 };
/*


                        [6,11]           [7]
                           o-----------o
                          /|          /|
                   [4,9]o--|---------o |[5,10]
                        |  |         | |
                        |  | [2,8]   | |
                        |  o-----------o [3]
                        | /          |/
                    [0] o-----------o [1]




*/

// Bottom - A, B, D, C

const UVMAP = [
    C, D, B, A,
    B, C, A, B,
    D, D, A, C,
];


function getIndices(offset){
    const start = offset * 12;
    return [
        // Order 1
        3, 1, 2,    2, 1,  0,  // bottom
        2, 0, 9,    2, 9,  6,  // west
        0, 1, 4,    4, 1, 10,  // south
        9, 10, 11,  11, 10, 7, // top
        3,  5,  1,   5,  3, 7, // east
        7, 3, 11,    11, 3, 8, // north

    ].map( n => n + start);

}

function Voxels({ position, cellSize, bounds, range }){

    const { points, uv } = useMemo( () => {
        const grid = new Grid({ bounds, wrap: [], gradient: [] });
        const halfSize = cellSize / 2;
        grid.fill( (p, g) => createCellPoint(p, halfSize));




        const points = grid.shape.flat();

        // grid.fill( (p, g) => null); // Free the points

        return {
            points,
            uv: points.map( (p, i) => {
                return UVMAP[i % UVMAP.length];
            })
        };
    }, []);

    const indices = useMemo( () => {
        const result = [];
        for(let i = 0; i < range; i++) result.push(...getIndices(i))
        return result;
    }, [range]);

    return <Mesh position = { position } >
        <BufferGeometry
            position = { points  }
            uv       = { uv      } 
            indices  = { indices }
        />
        <MeshBasicMaterial color = { 0xffffff } map="/textures/test.png" />
    </Mesh>;

}

// Creating 8 points in order to keep UV consistent
// Even if they are repeating
function createCellPoint( { x, y, z }, hs ){


    // hs - half cell size


    const v2 = { x: x - hs, y: y + hs, z: z - hs }; // repeat 2
    const v4 = { x: x - hs, y: y - hs, z: z + hs }; // repeat 4
    const v5 = { x: x + hs, y: y - hs, z: z + hs }; // repeat 5
    const v6 = { x: x - hs, y: y + hs, z: z + hs }; // repeat 6

    return [
        // Order 1
        { x: x - hs, y: y - hs, z: z - hs }, // 0
        { x: x + hs, y: y - hs, z: z - hs }, // 1
        v2, // { x: x - hs, y: y + hs, z: z - hs }, // 2
        { x: x + hs, y: y + hs, z: z - hs }, // 3

        v4, // { x: x - hs, y: y - hs, z: z + hs }, // 4
        v5, // { x: x + hs, y: y - hs, z: z + hs }, // 5
        v6, // { x: x - hs, y: y + hs, z: z + hs }, // 6
        { x: x + hs, y: y + hs, z: z + hs }, // 7

        v2, // { x: x - hs, y: y + hs, z: z - hs }, // repeat 2
        v4, // { x: x - hs, y: y - hs, z: z + hs }, // repeat 4
        v5, // { x: x + hs, y: y - hs, z: z + hs }, // repeat 5
        v6, // { x: x - hs, y: y + hs, z: z + hs }, // repeat 6



    ];
}