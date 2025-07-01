import React, { useEffect, useState, useMemo } from "react";

import { input } from "../examples/utils/controlHelpers.jsx";

import { InstancedMesh, useInstanceBuffer, BoxGeometry, MeshBasicMaterial } from "@orbits/engine";


export default function VoxelTest(){

    const [ wireframe, setWireframe ] = useState(false);
    const [ range,     setRange     ] = useState(1);

    const baseBlocks = useMemo( () => {
        const size = 130;

        const blocks = [];

        console.time("N Blocks");

        for(let x = 0; x < size; x++) for(let y = 0; y < size; y++) for(let z = 0; z < size; z++)
            blocks.push({position: {x, y, z }});

        console.log("BLOCKS: ", blocks.length);
        console.timeEnd("N Blocks");


        return blocks;


    }, [])

    return <>

        <InstancedMesh
            interactive onClick = { e => console.log("CLICK", e) }
            instances = { baseBlocks }
            forceCount = { range }
        >
            <BoxGeometry       size={[1, 1, 1]} />
            <MeshBasicMaterial color={0x00ff00} wireframe = { wireframe } />
        </InstancedMesh>
    
        <h1>Voxels</h1>

        <div className="controls-block">
            <p> { input( "Wireframe",       { checkbox: true                          }, wireframe,      setWireframe      ) } </p>
            <p> { input( "Range",          { range: [ 1, 130 * 130 * 130 ,    1 ],   type: "int"   }, range,         setRange, {width: "900px"}         ) } [{range}/{130 * 130 * 130}] </p>
        </div>
    
    </>;
}
