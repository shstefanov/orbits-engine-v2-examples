import React, { useState } from "react";
import { Mesh, MeshBasicMaterial, TorusGeometry } from "@orbits/engine";
import { input } from "../utils/controlHelpers.jsx";



export default function TorusGeometryExample(){

    const [ wireFrame,       setWireframe       ] = useState(false);
    const [ radius,          setRadius          ] = useState(12);
    const [ tubeRadius,      setTubeRadius      ] = useState(3);
    const [ radialSegments,  setradialSegments  ] = useState(5);
    const [ tubularSegments, setTubularSegments ] = useState(5);
    const [ arc,             setArc             ] = useState(Math.PI * 2);


    return <>
    
        <Mesh>
            <TorusGeometry
                radius          = { radius          }
                tubeRadius      = { tubeRadius      }
                radialSegments  = { radialSegments  }
                tubularSegments = { tubularSegments }
                arc             = { arc             }
            />
            <MeshBasicMaterial color={0xffffff} wireframe={wireFrame} />
        </Mesh>
    
    
    

        <h1>TorusGeometry</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/tree/blob/main/src/examples/geometries/TorusGeometryExample.jsx"
        > &lt;SOURCE&gt; </a>

        <div className="controls-block">
            <p> { input( "Wireframe",        { checkbox: true                        }, wireFrame,       setWireframe       ) } </p>
            <p> { input( "Radius",           { range: [ 0, 50, 0.01 ], type: "float" }, radius,          setRadius          ) } </p>
            <p> { input( "Tube Radius",      { range: [ 0, 50, 0.01 ], type: "float" }, tubeRadius,      setTubeRadius      ) } </p>
            <p> { input( "Radial Segments",  { range: [ 1, 20,    1 ], type: "int"   }, radialSegments,  setradialSegments  ) } </p>
            <p> { input( "Tubular segments", { range: [ 1, 20,    1 ], type: "int"   }, tubularSegments, setTubularSegments ) } </p>
            <p> { input( "Arc",              { range: [ 0, Math.PI * 2, 0.01 ], type: "float"   }, arc,  setArc  ) } </p>
        </div>
    
    </>;
}
