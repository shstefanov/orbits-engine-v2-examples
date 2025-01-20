import React from "react";
import { Mesh, Line } from "@orbits/engine";
import * as THREE from "three";

const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 3 });

export default function LineGeometryExample(){

    return <>
        
        <Line
            points={[ { x: 30, y: 0, z: 0 }, { x: 0, y: 0, z: 0 }, { x: 0, y: 30, z: 0 } ]}
            material={lineMaterial}
        />

        <h1>Line Geometry</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/blob/development/src/examples/geometries/LineGeometryExample.jsx"
        > &lt;SOURCE&gt; </a>






    </>;

}