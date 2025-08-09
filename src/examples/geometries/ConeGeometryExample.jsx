import React, { useState } from "react";
import { Mesh, MeshBasicMaterial, ConeGeometry } from "@orbits/engine";
import { input } from "../utils/controlHelpers.jsx";



export default function ConeGeometryExample(){

    const [ wireFrame,       setWireframe      ] = useState(false);
    const [ radius,          setRadius         ] = useState(10);
    const [ height,          setHeight         ] = useState(10);
    const [ radialSegments,  setRadialSegments ] = useState(5);
    const [ heightSegments,  setHeightSegments ] = useState(1);
    const [ openEnded,       setOpenEnded      ] = useState(false);
    const [ thetaStart,      setThetaStart     ] = useState(0);
    const [ thetaLength,     setThetaLength    ] = useState(Math.PI * 2);

    return <>
    
        <Mesh>
            <ConeGeometry
                radius         = { radius         }
                height         = { height         }
                radialSegments = { radialSegments }
                heightSegments = { heightSegments }
                openEnded      = { openEnded      }
                thetaStart     = { thetaStart     }
                thetaLength    = { thetaLength    }
            />
            <MeshBasicMaterial color={0xffffff} wireframe={wireFrame} />
        </Mesh>

        <h1>ConeGeometry</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/tree/blob/main/src/examples/geometries/ConeGeometryExample.jsx"
        > &lt;SOURCE&gt; </a>

        <div className="controls-block">
            <p> { input( "Wireframe",       { checkbox: true                              }, wireFrame,      setWireframe      ) } </p>
            <p> { input( "Radius",          { range: [10, 50, 0.01],        type: "float" }, radius,         setRadius         ) } </p>
            <p> { input( "Height",          { range: [10, 50, 0.01],        type: "float" }, height,         setHeight         ) } </p>
            <p> { input( "Radial Segments", { range: [ 1, 20,    1],        type: "int"   }, radialSegments, setRadialSegments ) } </p>
            <p> { input( "Height Segments", { range: [ 1, 20,    1],        type: "int"   }, heightSegments, setHeightSegments ) } </p>
            <p> { input( "Theta Start",     { range: [ 0, Math.PI*2, 0.01], type: "float" }, thetaStart,     setThetaStart     ) } </p>
            <p> { input( "Theta Length",    { range: [ 0, Math.PI*2, 0.01], type: "float" }, thetaLength,    setThetaLength    ) } </p>
            <p> { input( "Open Ended",      { checkbox: true                              }, openEnded,      setOpenEnded      ) } </p>
        </div>
        
    
    </>;
}
