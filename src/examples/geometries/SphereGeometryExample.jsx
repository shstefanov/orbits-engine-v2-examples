import React, { useState } from "react";
import { Mesh, MeshBasicMaterial, SphereGeometry } from "@orbits/engine";
import { input } from "../utils/controlHelpers.jsx";



export default function SphereGeometryExample(){

    const [ wireFrame,       setWireframe      ] = useState(false);
    const [ radius,          setRadius         ] = useState(10);
    const [ height,          setHeight         ] = useState(10);
    const [ widthSegments,   setWidthSegments  ] = useState(5);
    const [ heightSegments,  setHeightSegments ] = useState(5);
    const [ thetaStart,      setThetaStart     ] = useState(0);
    const [ thetaLength,     setThetaLength    ] = useState(Math.PI * 2);
    const [ phiStart,        setPhiStart       ] = useState(0);
    const [ phiLength,       setPhiLength      ] = useState(Math.PI);

    return <>
    
        <Mesh>
            <SphereGeometry
                radius         = { radius         }
                widthSegments  = { widthSegments  }
                heightSegments = { heightSegments }
                thetaStart     = { thetaStart     }
                thetaLength    = { thetaLength    }
                phiStart       = { phiStart       }
                phiLength      = { phiLength      }
            />

            <MeshBasicMaterial color={0xffffff} wireframe={wireFrame} />
        </Mesh>

        <h1>SphereGeometry</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/blob/main/src/examples/geometries/SphereGeometryExample.jsx"
        > &lt;SOURCE&gt; </a>

        <div className="controls-block">
            <p> { input( "Wireframe",       { checkbox: true                              }, wireFrame,      setWireframe      ) } </p>
            <p> { input( "Radius",          { range: [10, 50, 0.01],        type: "float" }, radius,         setRadius         ) } </p>
            <p> { input( "Width Segments",  { range: [ 1, 20,    1],        type: "int"   }, widthSegments,  setWidthSegments  ) } </p>
            <p> { input( "Height Segments", { range: [ 1, 20,    1],        type: "int"   }, heightSegments, setHeightSegments ) } </p>
            <p> { input( "Theta Start",     { range: [ 0, Math.PI*2, 0.01], type: "float" }, thetaStart,     setThetaStart     ) } </p>
            <p> { input( "Theta Length",    { range: [ 0, Math.PI*2, 0.01], type: "float" }, thetaLength,    setThetaLength    ) } </p>
            <p> { input( "Phi Start",       { range: [ 0, Math.PI,   0.01], type: "float" }, phiStart,       setPhiStart       ) } </p>
            <p> { input( "Phi Length",      { range: [ 0, Math.PI,   0.01], type: "float" }, phiLength,      setPhiLength      ) } </p>
        </div>
        
    
    </>;
}
