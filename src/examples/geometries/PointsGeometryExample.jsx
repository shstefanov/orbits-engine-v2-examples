import React, { useState } from "react";
import { Points } from "@orbits/engine";
import * as THREE from "three";

const pointsMaterial = new THREE.PointsMaterial( { color: 0x888888, size: 5, sizeAttenuation: false } );

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

export default function PointsGeometryExample(){

    const [ points, setPoints ] = useState(randPoints(10, 30));

    return <>
        
        <Points
            points   = { points        }
            material = { pointsMaterial}
        />

        <h1>Points Geometry</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/blob/main/src/examples/geometries/PointsGeometryExample.jsx"
        > &lt;SOURCE&gt; </a>

    </>;

}