import React, { useCallback, useState } from "react";
import { Mesh } from "@orbits/engine";
import * as THREE from "three";

const bigBoxGeometry = new THREE.BoxGeometry( 30, 30, 30 );
const bigBoxMaterial = new THREE.MeshPhongMaterial( { color: 0xffff00 } );

const hoverBoxGeometry = new THREE.BoxGeometry( 10, 10, 10 );
const hoverboxMaterial = new THREE.MeshPhongMaterial( { color: 0x0000ff } );

export default function HoverExample(){

    return <>
        
        { /* 3D components */ }
        <Mesh
            geometry = { bigBoxGeometry }
            material = { bigBoxMaterial }
            position = {{ x: -50, y: 0, z: 0 }}
            interactive
            hitbox={new THREE.BoxGeometry( 40, 40, 40 )}
            hover = {
                <Mesh
                    geometry = { hoverBoxGeometry }
                    material = { hoverboxMaterial }
                    position = {{ x: 0, y: 0, z: 30 }}
                />
            }
        >
        </Mesh>


        { /* HTML components */ }
        <h1>Hover</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/blob/main/src/examples/mouse/HoverExamples.jsx"
        > &lt;SOURCE&gt; </a>

    </>;
}
