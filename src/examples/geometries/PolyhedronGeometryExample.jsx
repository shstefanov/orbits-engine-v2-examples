import React, { useState } from "react";
import { Mesh, MeshBasicMaterial, PolyhedronGeometry } from "@orbits/engine";
import { input } from "../utils/controlHelpers.jsx";



export default function PolyhedronGeometryExample(){

    const [ wireFrame,      setWireframe      ] = useState(false);
    const [ radius,         setRadius         ] = useState(10);
    const [ detail,         setDetail         ] = useState(1);
    const [ faces,          setFaces          ] = useState(12);

    return <>
    
        <Mesh>
            <PolyhedronGeometry
                points = {[
                    { x: -1, y: -1,z: -1 }, { x: 1, y: -1, z: -1 }, { x: 1, y: 1,z: -1 }, { x: -1, y: 1, z: -1 },
                    { x: -1, y: -1,z:  1 }, { x: 1, y: -1, z:  1 }, { x: 1, y: 1,z:  1 }, { x: -1, y: 1, z:  1 },
                ]}
                indices = {[
                    2,1,0, 0,3,2,  0,4,7, 7,3,0,  0,1,5, 5,4,0,
                    1,2,6, 6,5,1,  2,3,7, 7,6,2,  4,5,6, 6,7,4
                ].slice(0, faces * 3)}
                radius = { radius }
                detail = { detail }
            />
            <MeshBasicMaterial color={0xffffff} wireframe={wireFrame} />
        </Mesh>
    
    
    

        <h1>PolyhedronGeometry</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/blob/main/src/examples/geometries/PolyhedronGeometryExample.jsx"
        > &lt;SOURCE&gt; </a>

        <div className="controls-block">
            <p> { input( "Wireframe", { checkbox: true                       }, wireFrame, setWireframe ) } </p>
            <p> { input( "Radius",    { range: [10, 50, 0.01], type: "float" }, radius,    setRadius    ) } </p>
            <p> { input( "Detail",    { range: [ 1, 20,    1], type: "int"   }, detail,    setDetail    ) } </p>
            <p> { input( "Faces",     { range: [ 1, 12,    1], type: "int"   }, faces,     setFaces     ) } </p>
        </div>
        
    
    </>;
}

const sizeProps    = { min: 10, max: 50, step: 0.01 }
const segmentProps = { min:  1, max: 20, step: 1    }