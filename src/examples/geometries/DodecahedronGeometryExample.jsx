import React, { useState } from "react";
import { Mesh, MeshBasicMaterial, DodecahedronGeometry } from "@orbits/engine";




export default function DodecahedronGeometryExample(){

    const [ wireFrame,      setWireframe      ] = useState(false);
    const [ radius,         setRadius         ] = useState(10);
    const [ detail,         setDetail         ] = useState(1);

    return <>
    
        <Mesh>
            <DodecahedronGeometry radius = { radius } detail = { detail } />
            <MeshBasicMaterial color={0xffffff} wireframe={wireFrame} />
        </Mesh>
    
    
    

        <h1>DodecahedronGeometry</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/tree/blob/main/src/examples/geometries/DodecahedronGeometryExample.jsx"
        > &lt;SOURCE&gt; </a>

        <div className="controls-block">
            <p> Wireframe: <input type="checkbox" checked={wireFrame} onChange={e => setWireframe(e.target.checked)}/> </p>
            <p> Radius:    <input type="range"    value={radius} {...sizeProps}    onChange={e => setRadius (parseFloat(e.target.value))}/> </p>
            <p> Detail:    <input type="range"    value={detail} {...segmentProps} onChange={e => setDetail (parseInt(e.target.value))}/> </p>
        </div>
        
    
    </>;
}

const sizeProps    = { min: 10, max: 50, step: 0.01 }
const segmentProps = { min:  1, max: 20, step: 1    }