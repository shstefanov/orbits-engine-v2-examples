import React, { useState } from "react";
import { Mesh, MeshBasicMaterial, ShapeGeometry } from "@orbits/engine";
import { input } from "../utils/controlHelpers.jsx";



export default function ShapeGeometryExample(){

    const [ wireFrame,      setWireframe      ] = useState(false);
    const [ detail,         setDetail         ] = useState(10);

    const [ shape,          setShape          ] = useState([
        // Follows methods of THREE.Path: https://threejs.org/docs/index.html#api/en/extras/core/Path
        // { x: 20, y: 20 },                      // Default action is move (moveTo)
        // { type: "line",        x: 30, y: 30 },
        { type: "absarc", x: 5, y: 5, radius: 5, startAngle: 0, endAngle: Math.PI / 3, clockwise: true },
        // { type: "absellipse", x: 30, y: 30, xRadius: 50, yRadius: 50, startAngle: 0, endAngle: Math.PI / 3, clockwise: true, rotation: 0 },
        // { type: "arc", x: 30, y: 30, radius: 50, startAngle: 0, endAngle: Math.PI / 3, clockwise: true },
        // { type: "bezierCurve", x: 30, y: -30, cp1: { x: 40, y: 10 }, cp2: { x: 40, y: -10 }  },
        // { type: "quadraticCurve", x: 30, y: -30, cp: { x: 40, y: 10 }  },
        // { type: "ellipse", x: 30, y: 30, xRadius: 50, yRadius: 50, startAngle: 0, endAngle: Math.PI / 3, clockwise: true, rotation: 0 },
        // { type: "points", points: [{ x:0, y: 0 }, { x: 10, y: -10 }] },
        // { type: "spline", points: [{ x:0, y: 0 }, { x: 10, y: -10 }] },
    ]);

    return <>
    
        <Mesh>
            <ShapeGeometry
                shape          = { shape  }
                detail         = { detail }
            />
            <MeshBasicMaterial color={ 0xffffff } wireframe={ wireFrame } />
        </Mesh>
    
    
    

        <h1>ShapeGeometry</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/blob/development/src/examples/geometries/ShapeGeometryExample.jsx"
        > &lt;SOURCE&gt; </a>

        <div className="controls-block">
            <p> { input( "Wireframe",       { checkbox: true                          }, wireFrame,      setWireframe      ) } </p>
            <p> { input( "Detail",          { range: [ 1, 20,    1 ],   type: "int"   }, detail,         setDetail         ) } </p>
        </div>
        
    
    </>;
}

const sizeProps    = { min: 10, max: 50, step: 0.01 }
const segmentProps = { min:  1, max: 20, step: 1    }