import React, { useState } from "react";
import { Mesh, MeshBasicMaterial, OctahedronGeometry } from "@orbits/engine";
import { input } from "../utils/controlHelpers.jsx";



export default function OctahedronGeometryExample(){

    const [ wireFrame,      setWireframe      ] = useState(false);
    const [ radius,         setRadius         ] = useState(10);
    const [ detail,         setDetail         ] = useState(1);

    return <>
    
        <Mesh>
            <OctahedronGeometry radius = { radius } detail = { detail } />
            <MeshBasicMaterial color={0xffffff} wireframe={wireFrame} />
        </Mesh>
    
    
    

        <h1>OctahedronGeometry</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/blob/development/src/examples/geometries/OctahedronGeometryExample.jsx"
        > &lt;SOURCE&gt; </a>

        <div className="controls-block">
            <p> { input( "Wireframe", { checkbox: true                       }, wireFrame, setWireframe ) } </p>
            <p> { input( "Radius",    { range: [10, 50, 0.01], type: "float" }, radius,    setRadius    ) } </p>
            <p> { input( "Detail",    { range: [ 1, 20,    1], type: "int"   }, detail,    setDetail    ) } </p>
        </div>
        
    
    </>;
}

const sizeProps    = { min: 10, max: 50, step: 0.01 }
const segmentProps = { min:  1, max: 20, step: 1    }