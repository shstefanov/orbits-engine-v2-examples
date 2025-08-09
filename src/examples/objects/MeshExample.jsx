import React from "react";
import { Mesh, BoxGeometry, MeshBasicMaterial } from "@orbits/engine";
import * as THREE from "three";

const predefinedGeometry  = new THREE.BoxGeometry( 30, 30, 30 );
const predefinedMaterial1 = new THREE.MeshBasicMaterial( {color: 0xff0000} );
const predefinedMaterial2 = new THREE.MeshBasicMaterial( {color: 0xffff00} );

export default function MeshExample(){

    return <>
        
        {/* With managed geometry and material */}
        <Mesh position = {{ x: -100, y: 0, z: 0 }} onCreate={ mesh => console.log(JSON.stringify(mesh.toJSON())) }>
            <BoxGeometry       size={[30, 30, 30]} />
            <MeshBasicMaterial color={0x00ff00}    />
        </Mesh>

        {/* Unmanaged geometry and material */}
        <Mesh
            position = {{ x: 100, y: 0, z: 0 }}
            geometry  = { predefinedGeometry }
            material  = { predefinedMaterial1 }
        >
        </Mesh>

        {/* Unmanaged geometry, managed material */}
        <Mesh
            position = {{ x: 0, y: 100, z: 0 }}
            geometry  = { predefinedGeometry }
        >
            <MeshBasicMaterial color={0x0000ff}    />
        </Mesh>

        {/* Managed geometry, unmanaged material */}
                <Mesh
            position = {{ x: 0, y: -100, z: 0 }}
            material  = { predefinedMaterial2 }
        >
            <BoxGeometry       size={[30, 30, 30]} />
        </Mesh>




        <h1>Mesh</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/tree/blob/main/src/examples/objects/MeshExample.jsx"
        > &lt;SOURCE&gt; </a>






    </>;

}