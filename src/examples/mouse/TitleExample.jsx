import React, { useCallback, useState } from "react";
import { Mesh } from "@orbits/engine";
import * as THREE from "three";

const bigBoxGeometry = new THREE.BoxGeometry( 30, 30, 30 );
const bigBoxMaterial = new THREE.MeshPhongMaterial( { color: 0xffff00 } );

export default function TitleExample(){

    return <>
        
        { /* 3D components */ }
        <Mesh
            geometry = { bigBoxGeometry }
            material = { bigBoxMaterial.clone() }
            position = {{ x: 0, y: 0, z: 0 }}
            interactive
            title    = "My Object Title"
        >
        </Mesh>

0
        { /* HTML components */ }
        <h1>Title</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/blob/main/src/examples/mouse/TitleExamples.jsx"
        > &lt;SOURCE&gt; </a>

    </>;
}
