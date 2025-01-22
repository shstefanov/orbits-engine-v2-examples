import React, { useState } from "react";
import { Mesh, LineSegments } from "@orbits/engine";
import * as THREE from "three";

const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 });

function randNum(from, to){
    return from + Math.floor(Math.random() * (to - from));
}

function randPoint(){
    return { x: randNum(-30, 30), y: randNum(-30, 30), z: randNum(-30, 30) };
}

function randPoints(from, to){
    const end = randNum(from, to);
    const result = [];
    for(let i = 0; i < end; i++) result.push(randPoint());
    return result;
}

export default function LineGeometryExample(){

    const [ points, setPoints ] = useState(randPoints(10, 30));

    function reset(){ setPoints(randPoints(10, 30)); }

    return <>
        
        <LineSegments
            onClick={reset}
            points={points}
            material={lineMaterial}
        />

        <h1>Line Geometry</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/blob/development/src/examples/geometries/LineSegmentsGeometryExample.jsx"
        > &lt;SOURCE&gt; </a>

    </>;

}