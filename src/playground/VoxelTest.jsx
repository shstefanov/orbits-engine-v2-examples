import React, { useEffect, useState, useMemo } from "react";

import { input } from "../examples/utils/controlHelpers.jsx";

import { Mesh, BufferGeometry, MeshBasicMaterial, MeshNormalMaterial } from "@orbits/engine";

// !!! Warning, Experiment !!! Imports module far outside project !!!
import Grid from "../../../../lib/orbits-generator/src/lib/Grid";

import * as THREE from "three";


export default function VoxelTest(){

    const [ range, setRange ] = useState(1);

    return <>

        <Voxels
            position = {{ x: 0, y: 0, z: 0 }}
            bounds   = {{ x: [-50, 50], y: [-50, 50], z: [-25, 25] }}
            cellSize = { 1 }
            range    = { range }
        
        
        />
    
        <h1>Voxels</h1>

        <div className="controls-block">
            {/* <p> { input( "Wireframe",       { checkbox: true                          }, wireFrame,      setWireframe      ) } </p> */}
            <p> { input( "Range",          { range: [ 1, 101 * 101 * 51,    1 ],   type: "int"   }, range,         setRange, {width: "900px"}         ) } [{range}/{101 * 101 * 51}] </p>
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

    const indices = useMemo( () => {
        const i = [];
        i.prev_range = 0; // inital;
        return i;

    }, []);

    const { points, uv, normals } = useMemo( () => {
        const grid = new Grid({ bounds, wrap: [], gradient: [] });
        const halfSize = cellSize / 2;
        grid.fill( (p, g) => createCellPoints(p, halfSize));




        const points = grid.shape.flat();
        const normals = [];
        for(let item of grid.shape){
            normals.push(...cellNormals);
        }

        // Generate 12 uv sets for each frid.shape item

        const uvmap_part = UVMAP.map( ({u, v}) => ({u: u / 2, v: v / 2 }));
        const uv_map_offsets = [
            { u: 0,  v: 0  }, // stone
            { u: .5, v: 0  }, // dirt
            { u: 0,  v: .5 }, // grass
            { u: .5, v: .5 }, // sand
        ];

        // Create uvmap sets for all 4 types, each array with uv-s for each part of texture
        uvmap_types = uv_map_offsets.map( type => {
            return uvmap_part.map( ({u,v}) => ({u: u + type.u, v: v + type.v}) );
        });


        const uv = grid.shape.map( (p, i) => {

            const rnd_index = Math.floor(Math.random() * uv_map_offsets.length);
            const rnd_uvs = uvmap_types[rnd_index];
            return rnd_uvs;

            return UVMAP[i % UVMAP.length];
        }).flat();

        // setTimeout(() => {
        //     points.splice();
        //     normals.splice();
        //     uv.splice();
        // }, 1000 );

        return {
            points,
            normals,
            uv,
        };
    }, []);

     useEffect( () => {
        // const result = [];
        // 32 indices per cube
        let start = 0;

        if(range < indices.prev_range){
            indices.splice(range * 36);
        }
        else if(range > indices.prev_range){
            for(let i = indices.prev_range; i < range; i++) {
                indices.push(...getIndices(i));
            }
        }

        indices.state = {};
        indices.prev_range = range;

    }, [range]);

    return <Mesh position = { position } >
        <BufferGeometry
            position = { points  }
            normal   = { normals }
            uv       = { uv      }
            indices  = { indices }
        />
        <MeshBasicMaterial map="/textures/4xtexture.png" />
    </Mesh>;

}

// Creating 8 points in order to keep UV consistent
// Even if they are repeating
function createCellPoints( { x, y, z }, hs ){

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



const cellNormals = [
    new THREE.Vector3(-1,-1,-1).normalize(),
    new THREE.Vector3(1,-1,-1).normalize(),
    new THREE.Vector3(-1,1,-1).normalize(),
    new THREE.Vector3(1,1,-1).normalize(),
    new THREE.Vector3(-1,-1,1).normalize(),
    new THREE.Vector3(1,-1,1).normalize(),
    new THREE.Vector3(-1,1,1).normalize(),
    new THREE.Vector3(1,1,1).normalize(),
    2,2,2,2
].map( (v, i, arr) => {
    if      (i === 8  ) v = arr[2];
    else if (i === 9  ) v = arr[4];
    else if (i === 10 ) v = arr[5];
    else if (i === 11 ) v = arr[6];
    else v.normalize();
    return { x: v.x, y: v.y, z: v.z };
});


// function createCellNormals(){

// }