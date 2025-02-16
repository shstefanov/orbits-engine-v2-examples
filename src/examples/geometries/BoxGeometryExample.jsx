import React, { useState } from "react";
import { Mesh, MeshBasicMaterial, BoxGeometry } from "@orbits/engine";
import { input } from "../utils/controlHelpers.jsx";



export default function BoxGeometryExample(){

    const [ wireFrame,      setWireframe      ] = useState(false);
    const [ width,          setWidth          ] = useState(10);
    const [ height,         setHeight         ] = useState(10);
    const [ depth,          setDepth          ] = useState(10);
    const [ widthSegments,  setWidthSegments  ] = useState(1);
    const [ heightSegments, setHeightSegments ] = useState(1);
    const [ depthSegments,  setDepthSegments  ] = useState(1);

    return <>
    
        <Mesh>
            <BoxGeometry size = {[ width, height, depth ]} segments = {[ widthSegments, heightSegments, depthSegments ]} />
            <MeshBasicMaterial color={0xffffff} wireframe={wireFrame} />
        </Mesh>
    
    
    

        <h1>BoxGeometry</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/blob/development/src/examples/geometries/BoxGeometryExample.jsx"
        > &lt;SOURCE&gt; </a>

        <div className="controls-block">
            <p> { input( "Wireframe",       { checkbox: true                       }, wireFrame,      setWireframe      ) } </p>
            <p> { input( "Width",           { range: [10, 50, 0.01], type: "float" }, width,          setWidth          ) } </p>
            <p> { input( "Height",          { range: [10, 50, 0.01], type: "float" }, height,         setHeight         ) } </p>
            <p> { input( "Depth",           { range: [10, 50, 0.01], type: "float" }, depth,          setDepth          ) } </p>
            <p> { input( "Width segments",  { range: [ 1, 20,    1], type: "int"   }, widthSegments,  setWidthSegments  ) } </p>
            <p> { input( "Height segments", { range: [ 1, 20,    1], type: "int"   }, heightSegments, setHeightSegments ) } </p>
            <p> { input( "Depth segments",  { range: [ 1, 20,    1], type: "int"   }, depthSegments,  setDepthSegments  ) } </p>
        </div>
    
    </>;
}
