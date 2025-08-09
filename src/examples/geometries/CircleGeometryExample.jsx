import React, { useState } from "react";
import { Mesh, MeshBasicMaterial, CircleGeometry } from "@orbits/engine";
import { input } from "../utils/controlHelpers.jsx";



export default function CircleGeometryExample(){

    const [ wireFrame,      setWireframe      ] = useState(false);
    const [ radius,         setRadius         ] = useState(10);
    const [ segments,       setSegments       ] = useState(5);


    return <>
    
        <Mesh>
            <CircleGeometry radius = { radius } segments = { segments } />
            <MeshBasicMaterial color={0xffffff} wireframe={wireFrame} />
        </Mesh>
    
    
    

        <h1>CircleGeometry</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/blob/main/src/examples/geometries/CircleGeometryExample.jsx"
        > &lt;SOURCE&gt; </a>

        <div className="controls-block">
            <p> { input( "Wireframe", { checkbox: true                       }, wireFrame, setWireframe ) } </p>
            <p> { input( "Radius",    { range: [10, 50, 0.01], type: "float" }, radius,    setRadius    ) } </p>
            <p> { input( "Segments",  { range: [ 1, 20,    1], type: "int"   }, segments,  setSegments  ) } </p>
        </div>
        
    
    </>;
}

const sizeProps    = { min: 10, max: 50, step: 0.01 }
const segmentProps = { min:  5, max: 25, step: 1    }