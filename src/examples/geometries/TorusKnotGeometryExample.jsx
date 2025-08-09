import React, { useState } from "react";
import { Mesh, MeshBasicMaterial, TorusKnotGeometry } from "@orbits/engine";
import { input } from "../utils/controlHelpers.jsx";



export default function TorusKnotGeometryExample(){

    const [ wireFrame,       setWireframe       ] = useState(false);
    const [ radius,          setRadius          ] = useState(12);
    const [ tubeRadius,      setTubeRadius      ] = useState(3);
    const [ radialSegments,  setradialSegments  ] = useState(5);
    const [ tubularSegments, setTubularSegments ] = useState(5);
    const [ p,               setP               ] = useState(2);
    const [ q,               setQ               ] = useState(3);


    return <>
    
        <Mesh>
            <TorusKnotGeometry
                radius          = { radius          }
                tubeRadius      = { tubeRadius      }
                radialSegments  = { radialSegments  }
                tubularSegments = { tubularSegments }
                p               = { p               }
                q               = { q               }
            />
            <MeshBasicMaterial color={0xffffff} wireframe={wireFrame} />
        </Mesh>
    
    
    

        <h1>TorusKnotGeometry</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/blob/main/src/examples/geometries/TorusKnotGeometryExample.jsx"
        > &lt;SOURCE&gt; </a>

        <div className="controls-block">
            <p> { input( "Wireframe",        { checkbox: true                        }, wireFrame,       setWireframe       ) } </p>
            <p> { input( "Radius",           { range: [ 0, 50, 0.01 ], type: "float" }, radius,          setRadius          ) } </p>
            <p> { input( "Tube Radius",      { range: [ 0, 50, 0.01 ], type: "float" }, tubeRadius,      setTubeRadius      ) } </p>
            <p> { input( "Radial Segments",  { range: [ 1, 20,    1 ], type: "int"   }, radialSegments,  setradialSegments  ) } </p>
            <p> { input( "Tubular segments", { range: [ 1, 200,   1 ], type: "int"   }, tubularSegments, setTubularSegments ) } </p>
            <p> { input( "P",                { range: [ 1, 10,    1 ], type: "int"   }, p,  setP  ) } </p>
            <p> { input( "Q",                { range: [ 1, 10,    1 ], type: "int"   }, q,  setQ  ) } </p>
        </div>
    
    </>;
}
