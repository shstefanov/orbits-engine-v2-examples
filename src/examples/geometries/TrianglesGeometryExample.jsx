import React, { useState } from "react";
import { Triangles } from "@orbits/engine";
import * as THREE from "three";

const trianglesMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
const coloredMaterial = new THREE.MeshBasicMaterial( { vertexColors: true } );
const coloredTransparentMaterial = new THREE.MeshBasicMaterial( { vertexColors: true, transparent: true } );

function rnd(scale = 1){ return Math.random() * scale; }
function rndPoint(offset, scale){ return {x: offset - rnd(scale), y: offset - rnd(scale), z: offset - rnd(scale)} }
function rndRGBColor(){ return { r: rnd(), g: rnd(), b: rnd() }; }
function rndRGBAColor(){ return { r: rnd(), g: rnd(), b: rnd(), a: rnd() }; }

export default function TrianglesGeometryExample(){

    return <>
        
        {/* Just material */}
        <Triangles
            points   = {[
                rndPoint(50, 100), rndPoint(50, 100), rndPoint(50, 100),
                rndPoint(50, 100), rndPoint(50, 100), rndPoint(50, 100),
                rndPoint(50, 100), rndPoint(50, 100), rndPoint(50, 100),
                rndPoint(50, 100), rndPoint(50, 100), rndPoint(50, 100),
                rndPoint(50, 100), rndPoint(50, 100), rndPoint(50, 100),
            ]}
            material = { trianglesMaterial}
        />

        {/* With RGB colors */}
        <Triangles
            points   = {[
                rndPoint(50, 100), rndPoint(50, 100), rndPoint(50, 100),
                rndPoint(50, 100), rndPoint(50, 100), rndPoint(50, 100),
                rndPoint(50, 100), rndPoint(50, 100), rndPoint(50, 100),
                rndPoint(50, 100), rndPoint(50, 100), rndPoint(50, 100),
                rndPoint(50, 100), rndPoint(50, 100), rndPoint(50, 100),
            ]}

            rgbColors = {[
                rndRGBColor(), rndRGBColor(), rndRGBColor(),
                rndRGBColor(), rndRGBColor(), rndRGBColor(),
                rndRGBColor(), rndRGBColor(), rndRGBColor(),
                rndRGBColor(), rndRGBColor(), rndRGBColor(),
                rndRGBColor(), rndRGBColor(), rndRGBColor(),
            ]}


            material = { coloredMaterial }
        />

        {/* With RGBA colors */}
        <Triangles
            points   = {[
                rndPoint(50, 100), rndPoint(50, 100), rndPoint(50, 100),
                rndPoint(50, 100), rndPoint(50, 100), rndPoint(50, 100),
                rndPoint(50, 100), rndPoint(50, 100), rndPoint(50, 100),
                rndPoint(50, 100), rndPoint(50, 100), rndPoint(50, 100),
                rndPoint(50, 100), rndPoint(50, 100), rndPoint(50, 100),
            ]}

            rgbaColors = {[
                rndRGBAColor(), rndRGBAColor(), rndRGBAColor(),
                rndRGBAColor(), rndRGBAColor(), rndRGBAColor(),
                rndRGBAColor(), rndRGBAColor(), rndRGBAColor(),
                rndRGBAColor(), rndRGBAColor(), rndRGBAColor(),
                rndRGBAColor(), rndRGBAColor(), rndRGBAColor(),
            ]}


            material = { coloredTransparentMaterial }
        />

        <h1>Triangles Geometry</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/blob/development/src/examples/geometries/TrianglesGeometryExample.jsx"
        > &lt;SOURCE&gt; </a>

    </>;

}