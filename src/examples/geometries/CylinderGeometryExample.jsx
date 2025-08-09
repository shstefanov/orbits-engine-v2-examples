import React, { useState } from "react";
import { Mesh, MeshBasicMaterial, CylinderGeometry } from "@orbits/engine";
import { input } from "../utils/controlHelpers.jsx";



export default function CylinderGeometryExample(){

    const [ wireFrame,      setWireframe      ] = useState(false);
    const [ radiusTop,      setRadiusTop      ] = useState(10);
    const [ radiusBottom,   setRadiusBottom   ] = useState(10);
    const [ height,         setHeight         ] = useState(10);
    const [ heightSegments, setHeightSegments ] = useState(5);
    const [ radialSegments, setRadialSegments ] = useState(5);
    const [ openEnded,      setOpenEnded      ] = useState(false);
    const [ thetaStart,     setThetaStart     ] = useState(0);
    const [ thetaLength,    setThetaLength    ] = useState(Math.PI * 2);

    return <>
    
        <Mesh>
            <CylinderGeometry
                wireFrame      = { wireFrame      }
                radiusTop      = { radiusTop      }
                radiusBottom   = { radiusBottom   }
                height         = { height         }
                heightSegments = { heightSegments }
                radialSegments = { radialSegments }
                openEnded      = { openEnded      }
                thetaStart     = { thetaStart     }
                thetaLength    = { thetaLength    }
            />
            <MeshBasicMaterial color={0xffffff} wireframe={wireFrame} />
        </Mesh>
    
    
    

        <h1>CylinderGeometry</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/tree/blob/main/src/examples/geometries/CylinderGeometryExample.jsx"
        > &lt;SOURCE&gt; </a>

        <div className="controls-block">
            <p> { input( "Wireframe",       { checkbox: true                              }, wireFrame,      setWireframe      ) } </p>
            <p> { input( "Top Radius",      { range: [10, 50, 0.01],        type: "float" }, radiusTop,      setRadiusTop      ) } </p>
            <p> { input( "Bottom Radius",   { range: [10, 50, 0.01],        type: "float" }, radiusBottom,   setRadiusBottom   ) } </p>
            <p> { input( "Height",          { range: [10, 50, 0.01],        type: "float" }, height,         setHeight         ) } </p>
            <p> { input( "Height Segments", { range: [ 1, 20,    1],        type: "int"   }, heightSegments, setHeightSegments ) } </p>
            <p> { input( "Radial Segments", { range: [ 1, 20,    1],        type: "int"   }, radialSegments, setRadialSegments ) } </p>
            <p> { input( "Theta Start",     { range: [ 0, Math.PI*2, 0.01], type: "float" }, thetaStart,     setThetaStart     ) } </p>
            <p> { input( "Theta Length",    { range: [ 0, Math.PI*2, 0.01], type: "float" }, thetaLength,    setThetaLength    ) } </p>
            <p> { input( "Open Ended",      { checkbox: true                              }, openEnded,      setOpenEnded      ) } </p>
        </div>
        
    
    </>;
}
