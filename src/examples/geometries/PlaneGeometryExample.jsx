import React, { useState } from "react";
import { Mesh, MeshBasicMaterial, PlaneGeometry } from "@orbits/engine";
import { input } from "../utils/controlHelpers.jsx";



export default function PlaneGeometryExample(){

    const [ wireFrame,      setWireframe      ] = useState(false);
    const [ width,          setWidth          ] = useState(10);
    const [ height,         setHeight         ] = useState(10);
    const [ widthSegments,  setWidthSegments  ] = useState(1);
    const [ heightSegments, setHeightSegments ] = useState(1);

    return <>
    
        <Mesh>
            <PlaneGeometry
                width          = { width }
                height         = { height }
                widthSegments  = { widthSegments }
                heightSegments = { heightSegments }
            />
            <MeshBasicMaterial color={0xffffff} wireframe={wireFrame} />
        </Mesh>
    
    
    

        <h1>PlaneGeometry</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/blob/main/src/examples/geometries/PlaneGeometryExample.jsx"
        > &lt;SOURCE&gt; </a>

        <div className="controls-block">
            <p> { input( "Wireframe",       { checkbox: true                       }, wireFrame,      setWireframe      ) } </p>
            <p> { input( "Width",           { range: [10, 50, 0.01], type: "float" }, width,          setWidth          ) } </p>
            <p> { input( "Height",          { range: [10, 50, 0.01], type: "float" }, height,         setHeight         ) } </p>
            <p> { input( "Width segments",  { range: [ 1, 20,    1], type: "int"   }, widthSegments,  setWidthSegments  ) } </p>
            <p> { input( "Height segments", { range: [ 1, 20,    1], type: "int"   }, heightSegments, setHeightSegments ) } </p>
        </div>
    
    </>;
}
