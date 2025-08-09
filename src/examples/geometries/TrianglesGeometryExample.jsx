import React, { useState, useMemo } from "react";
import { Triangles } from "@orbits/engine";
import * as THREE from "three";

const trianglesMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
const coloredMaterial = new THREE.MeshBasicMaterial( { vertexColors: true } );
const coloredTransparentMaterial = new THREE.MeshBasicMaterial( { vertexColors: true, transparent: true } );


export default function TrianglesGeometryExample(){

    const [ showMaterialOnly, setShowMaterialOnly ] = useState(true);
    const [ showRGBColors,    setShowRGBColors    ] = useState(false);
    const [ showRGBAColors,   setShowRGBAColors   ] = useState(false);

    const materialPoints = useMemo(() => showMaterialOnly ? rndPoints( 3 * 5 ) : [], [showMaterialOnly]);

    const {rgbPoints, rgbColors } = useMemo(() => {
        return {
            rgbPoints: showRGBColors ? rndPoints( 3 * 5 )    : [],
            rgbColors: showRGBColors ? rndRGBColors( 3 * 5 ) : [],
        };
    }, [showRGBColors]);

    const {rgbaPoints, rgbaColors } = useMemo(() => {
        return {
            rgbaPoints: showRGBAColors ? rndPoints( 3 * 5 )     : [],
            rgbaColors: showRGBAColors ? rndRGBAColors( 3 * 5 ) : [],
        };
    }, [showRGBAColors]);

    return <>
       
        {/* Just material */}
        { showMaterialOnly && <Triangles
            // points format is: [ {x:0,y:0,z:1},{x,y,z},{x,y,z},  {x,y,z},{x,y,z},{x,y,z}, ... ]
            points   = {materialPoints}
            material = { trianglesMaterial }
            interactive onClick={ () => console.log("Click Regular Triangles")}
        />}

        {/* With RGB colors */}
        {showRGBColors && <Triangles
            // points format is: [ {x:0,y:0,z:1},{x,y,z},{x,y,z},  {x,y,z},{x,y,z},{x,y,z}, ... ]
            points   = {rgbPoints}
            // rgbColors format is [{r: 0.5, g: 0.2, b:0.1},{r,g,b},{r,g,b}, {r,g,b},{r,g,b},{r,g,b}, ...] for each point
            rgbColors = {rgbColors}
            // material need to be with option: { vertexColors: true }
            material = { coloredMaterial }
            interactive onClick={ () => console.log("Click Color Triangles")}
        />}

        {/* With RGBA colors */}
        {showRGBAColors && <Triangles
            // points format is: [ {x:0,y:0,z:1},{x,y,z},{x,y,z},  {x,y,z},{x,y,z},{x,y,z}, ... ]
            points   = {rgbaPoints}
            // rgbaColors format is [{r: 0.5, g: 0.2, b:0.1, a: 0.8},{r,g,b,a},{r,g,b,a}, {r,g,b,a},{r,g,b,a},{r,g,b,a}, ...] for each point
            rgbaColors = {rgbaColors}
            // material need to be with option: { vertexColors: true, transparent: true }
            material = { coloredTransparentMaterial }
            interactive onClick={ () => console.log("Click Transparent Triangles")}
        />}

        <h1>Triangles Geometry</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/tree/blob/main/src/examples/geometries/TrianglesGeometryExample.jsx"
        > &lt;SOURCE&gt; </a>

        <div className="controls-block">
            <p>
                Material only: <input type="checkbox" checked={showMaterialOnly} onChange={e => setShowMaterialOnly(e.target.checked)}/>
            </p>

            <p>
                RGB vertex colors: <input type="checkbox" checked={showRGBColors} onChange={e => setShowRGBColors(e.target.checked)}/>
            </p>

            <p>
                RGBA vertex colors: <input type="checkbox" checked={showRGBAColors} onChange={e => setShowRGBAColors(e.target.checked)}/>
            </p>
        </div>

    </>;

}




function rnd(scale = 1){ return Math.random() * scale; }
function rndPoint(offset, scale){ return {x: offset - rnd(scale), y: offset - rnd(scale), z: offset - rnd(scale)} }
function rndRGBColor(){ return { r: rnd(), g: rnd(), b: rnd() }; }
function rndRGBAColor(){ return { r: rnd(), g: rnd(), b: rnd(), a: rnd() }; }

function rndPoints(n){
    const result = [];
    for(let i =0; i < n; i++) result.push(rndPoint(50, 100))
    return result;
}

function rndRGBColors(n){
    const result = [];
    for(let i =0; i < n; i++) result.push(rndRGBColor())
    return result;
}

function rndRGBAColors(n){
    const result = [];
    for(let i =0; i < n; i++) result.push(rndRGBAColor())
    return result;
}