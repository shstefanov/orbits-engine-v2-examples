import React, { useState } from "react";
import { Mesh, MeshBasicMaterial, CapsuleGeometry } from "@orbits/engine";
import { input } from "../utils/controlHelpers.jsx";



export default function CapsuleGeometryExample(){

    const [ wireFrame,      setWireframe      ] = useState(false);
    const [ radius,         setRadius         ] = useState(10);
    const [ length,         setLength         ] = useState(10);
    const [ capSegments,    setCapSegments    ] = useState(5);
    const [ radialSegments, setRadialSegments ] = useState(5);


    return <>
    
        <Mesh>
            <CapsuleGeometry radius = { radius } length = { length } capSegments = { capSegments } radialSegments = { radialSegments } />
            <MeshBasicMaterial color = { 0xffffff } wireframe = { wireFrame } />
        </Mesh>
    
    
    

        <h1>CapsuleGeometry</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/blob/main/src/examples/geometries/CapsuleGeometryExample.jsx"
        > &lt;SOURCE&gt; </a>

        <div className="controls-block">
            <p> { input( "Wireframe",       { checkbox: true                       }, wireFrame,      setWireframe      ) } </p>
            <p> { input( "Radius",          { range: [10, 50, 0.01], type: "float" }, radius,         setRadius         ) } </p>
            <p> { input( "Length",          { range: [10, 50, 0.01], type: "float" }, length,         setLength         ) } </p>
            <p> { input( "Cap segments",    { range: [ 1, 20,    1], type: "int"   }, capSegments,    setCapSegments    ) } </p>
            <p> { input( "Radial segments", { range: [ 1, 20,    1], type: "int"   }, radialSegments, setRadialSegments ) } </p>
        </div>
        
    
    </>;
}
