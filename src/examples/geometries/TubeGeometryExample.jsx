import React, { useState } from "react";
import { Mesh, MeshBasicMaterial, TubeGeometry } from "@orbits/engine";
import { input } from "../utils/controlHelpers.jsx";



export default function TubeGeometryExample(){

    const [ wireFrame,      setWireframe        ] = useState(false);
    const [ tubularSegments, setTubularSegments ] = useState(20);
    const [ radius,          setRadius          ] = useState(10);
    const [ radialSegments,  setRadialSegments  ] = useState(5);
    const [ closed,          setClosed          ] = useState(false);

    return <>
    
        <Mesh>
            <TubeGeometry
                tubularSegments = { tubularSegments }
                radius          = { radius          }
                radialSegments  = { radialSegments  }
                closed          = { closed          }
                

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


                pathType="CatmullRom" // Just series of points
                path = {[
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



        <h1>TubeGeometry</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/tree/blob/main/src/examples/geometries/TubeGeometryExample.jsx"
        > &lt;SOURCE&gt; </a>

        <div className="controls-block">
            <p> { input( "Wireframe",       { checkbox: true                        }, wireFrame,       setWireframe       ) } </p>
            <p> { input( "Tubular Steps",   { range: [ 1, 50,    1 ], type: "int"   }, tubularSegments, setTubularSegments ) } </p>
            <p> { input( "Radius",          { range: [ 1, 50, 0.01 ], type: "float" }, radius,          setRadius          ) } </p>
            <p> { input( "Radial Segments", { range: [ 1, 10,    1 ], type: "int"   }, radialSegments,  setRadialSegments  ) } </p>
            <p> { input( "Closed",          { checkbox: true                        }, closed,          setClosed          ) } </p>
        </div>
        
    
    </>;
}

const sizeProps    = { min: 10, max: 50, step: 0.01 }
const segmentProps = { min:  1, max: 20, step: 1    }