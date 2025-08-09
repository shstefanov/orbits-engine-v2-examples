import React, { useState } from "react";
import { Mesh, MeshBasicMaterial, RingGeometry } from "@orbits/engine";
import { input } from "../utils/controlHelpers.jsx";



export default function RingGeometryExample(){

    const [ wireFrame,      setWireframe      ] = useState(false);
    const [ innerRadius,    setInnerRadius    ] = useState(5);
    const [ outerRadius,    setOuterRadius    ] = useState(10);
    const [ thetaSegments,  setThetaSegments  ] = useState(5);
    const [ phiSegments,    setPhiSegments    ] = useState(5);
    const [ thetaStart,     setThetaStart     ] = useState(0);
    const [ thetaLength,    setThetaLength    ] = useState(Math.PI * 2);

    return <>
    
        <Mesh>
            <RingGeometry
                innerRadius   = { innerRadius   }
                outerRadius   = { outerRadius   }
                thetaSegments = { thetaSegments }
                phiSegments   = { phiSegments   }
                thetaStart    = { thetaStart    }
                thetaLength   = { thetaLength   }
            />
            <MeshBasicMaterial color={0xffffff} wireframe={wireFrame} />
        </Mesh>
    
    
    

        <h1>RingGeometry</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/tree/blob/main/src/examples/geometries/RingGeometryExample.jsx"
        > &lt;SOURCE&gt; </a>

        <div className="controls-block">
            <p> { input( "Wireframe",       { checkbox: true                        }, wireFrame,      setWireframe      ) } </p>
            <p> { input( "Inner Radius",    { range: [ 0, 20, 0.01 ], type: "float" }, innerRadius,    setInnerRadius    ) } </p>
            <p> { input( "Outer Radius",    { range: [ 0, 20, 0.01 ], type: "float" }, outerRadius,    setOuterRadius    ) } </p>
            <p> { input( "Phi Segments",    { range: [ 1, 20,    1 ], type: "int"   }, phiSegments,    setPhiSegments    ) } </p>
            <p> { input( "Theta segments",  { range: [ 1, 20,    1 ], type: "int"   }, thetaSegments,  setThetaSegments  ) } </p>
            <p> { input( "Theta Start",     { range: [ 0, Math.PI * 2, 0.01 ], type: "float"   }, thetaStart,  setThetaStart  ) } </p>
            <p> { input( "Theta Length",    { range: [ 0, Math.PI * 2, 0.01 ], type: "float"   }, thetaLength, setThetaLength ) } </p>
        </div>
    
    </>;
}
