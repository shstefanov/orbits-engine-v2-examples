import React, { useState } from "react";
import { Mesh, MeshBasicMaterial, LatheGeometry } from "@orbits/engine";
import { input } from "../utils/controlHelpers.jsx";



export default function LatheGeometryExample(){

    const [ wireFrame,      setWireframe      ] = useState(false);
    const [ segments,       setSegments       ] = useState(5);
    const [ phiStart,       setPhiStart       ] = useState(0);
    const [ phiLength,      setPhiLength      ] = useState(Math.PI * 2);

    return <>
    
        <Mesh>
            <LatheGeometry
                segments  = { segments  }
                phiStart  = { phiStart  }
                phiLength = { phiLength }
                points = {[
                    // x and y points. Lathe rotates around y axis. x must be positive
                    { x: 20, y:  0 }, { x: 40, y:  0 },
                    { x: 40, y: 20 }, { x: 60, y: 20 },
                ]}
            />
            <MeshBasicMaterial color={0xffffff} wireframe={wireFrame} />
        </Mesh>
    
    
    

        <h1>LatheGeometry</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/blob/development/src/examples/geometries/LatheGeometryExample.jsx"
        > &lt;SOURCE&gt; </a>

        <div className="controls-block">
            <p> Wireframe: <input type="checkbox" checked={wireFrame} onChange={e => setWireframe(e.target.checked)}/> </p>
            <p> { input( "Segments",   { range: [ 1, 20,    1],        type: "int"   }, segments,  setSegments  ) } </p>
            <p> { input( "Phi Start",  { range: [ 0, Math.PI*2, 0.01], type: "float" }, phiStart,  setPhiStart  ) } </p>
            <p> { input( "Phi Length", { range: [ 0, Math.PI*2, 0.01], type: "float" }, phiLength, setPhiLength ) } </p>
        </div>
        
    
    </>;
}

const sizeProps    = { min: 10, max: 50, step: 0.01 }
const segmentProps = { min:  1, max: 20, step: 1    }