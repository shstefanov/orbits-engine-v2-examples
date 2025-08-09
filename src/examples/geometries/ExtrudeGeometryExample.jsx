import React, { useState } from "react";
import { Mesh, MeshBasicMaterial, ExtrudeGeometry } from "@orbits/engine";
import { input } from "../utils/controlHelpers.jsx";



export default function ExtrudeGeometryExample(){

    const [ wireFrame,      setWireframe      ] = useState(false);
    const [ steps,          setSteps          ] = useState(20);
    const [ depth,          setDepth          ] = useState(10);
    const [ bevelEnabled,   setBevelEnabled   ] = useState(false);
    const [ bevelThickness, setBevelThickness ] = useState(1);
    const [ bevelSize,      setBevelSize      ] = useState(1);
    const [ bevelOffset,    setBevelOffset    ] = useState(1);
    const [ bevelSegments,  setBevelSegments  ] = useState(1);



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
            <ExtrudeGeometry
                shape          = { shape          }
                steps          = { steps          }
                depth          = { depth          }
                bevelEnabled   = { bevelEnabled   }
                bevelThickness = { bevelThickness }
                bevelSize      = { bevelSize      }
                bevelOffset    = { bevelOffset    }
                bevelSegments  = { bevelSegments  }

                // extrudePathType="Line"
                // extrudePath = {[
                //     { x: 0, y: 0, z: 0 }, { x: 0, y: 300, z: 0 }, { x: 0, y: 300, z: 300 },
                // ]}

                // extrudePathType="QuadraticBezier"
                // extrudePath = {[
                //     { x: 0, y: 0, z: 0 }, // Start
                //         { x: 150, y: 400, z: 0 }, // Control point
                //     { x: 300, y: 0, z: 0 }, // Start
                //     { x: 300, y: 0, z: 0 }, // Start
                //         { x: 450, y: -400, z: 0 }, // Control point
                //     { x: 600, y: 0, z: 0 }, // Start
                // ]}

                // extrudePathType="CubicBezier"
                // extrudePath = {[
                //     { x: 0, y: 0, z: 0 }, // Start
                //         { x: 100, y: 400, z: 0 }, { x: 200, y: 400, z: 0 }, // 2 Control points
                //     { x: 300, y: 0, z: 0 }, // Start
                //     { x: 300, y: 0, z: 0 }, // Start
                //         { x: 400, y: -400, z: 0 }, { x: 500, y: -400, z: 0 }, // 2 Control points
                //     { x: 600, y: 0, z: 0 }, // Start
                // ]}


                extrudePathType="CatmullRom" // Just series of points
                extrudePath = {[
                    { x: 0, y: 0, z: 0 },
                    { x: 100, y: 400, z: 0 },
                    { x: 200, y: 400, z: 0 },
                    { x: 300, y: 0, z: 0 },
                    { x: 300, y: 0, z: 0 },
                    { x: 400, y: -400, z: 0 },
                    { x: 500, y: -400, z: 0 },
                    { x: 600, y: 0, z: 0 },
                ]}


                // TODO: extrudePath
                // TODO: extrudePathType: default: CubicBezier, QuadraticBezier, CatmullRom, Line
                // TODO: UVGenerator — Object. object that provides UV generator functions
            />
            <MeshBasicMaterial color={0xffffff} wireframe={wireFrame} />
        </Mesh>
    
    
    

        <h1>ExtrudeGeometry</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/blob/main/src/examples/geometries/ExtrudeGeometryExample.jsx"
        > &lt;SOURCE&gt; </a>

        <div className="controls-block">
            <p> { input( "Wireframe",       { checkbox: true                          }, wireFrame,      setWireframe      ) } </p>
            <p> { input( "Steps",           { range: [ 1, 50,    1 ],   type: "int"   }, steps,          setSteps          ) } </p>
            <p> { input( "Depth",           { range: [10, 50, 0.01 ],   type: "float" }, depth,          setDepth          ) } </p>
            <p> { input( "Bevel enabled",   { checkbox: true                          }, bevelEnabled,   setBevelEnabled   ) } </p>
            <p> { input( "Bevel Thickness", { range: [ -10, 10, 0.01 ], type: "float" }, bevelThickness, setBevelThickness ) } </p>
            <p> { input( "Bevel Size",      { range: [ -10, 10, 0.01 ], type: "float" }, bevelSize,      setBevelSize      ) } </p>
            <p> { input( "Bevel Offset",    { range: [ -10, 10, 0.01 ], type: "float" }, bevelOffset,    setBevelOffset    ) } </p>
            <p> { input( "Bevel Segments",  { range: [   1, 10,    1 ], type: "int"   }, bevelSegments,  setBevelSegments  ) } </p>
        </div>
        
    
    </>;
}

const sizeProps    = { min: 10, max: 50, step: 0.01 }
const segmentProps = { min:  1, max: 20, step: 1    }