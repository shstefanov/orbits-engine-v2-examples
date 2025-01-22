import React, { useCallback, useState } from "react";
import { Mesh, Group } from "@orbits/engine";
import * as THREE from "three";

const boxGeometry     = new THREE.BoxGeometry( 25, 25, 25 );
const boxMaterial     = new THREE.MeshPhongMaterial( {color: 0xffff00} );

export default function MouseEventsExample(){

    return <>

        { /* 3D components */ }
        <Group position={{ x: 0, y: 0, z: -25 }}>
            <Mesh geometry={boxGeometry} material={boxMaterial} position = {{ x:  65, y:  65, z: 0 }} />
            <Mesh geometry={boxGeometry} material={boxMaterial} position = {{ x: -65, y:  65, z: 0 }} />
            <Mesh geometry={boxGeometry} material={boxMaterial} position = {{ x:  65, y: -65, z: 0 }} />
            <Mesh geometry={boxGeometry} material={boxMaterial} position = {{ x: -65, y: -65, z: 0 }} />
        </Group>



        { /* HTML components */ } 
        <h1>Group</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/blob/development/src/examples/GroupExample.jsx"
        > &lt;SOURCE&gt; </a>

    </>;
}
