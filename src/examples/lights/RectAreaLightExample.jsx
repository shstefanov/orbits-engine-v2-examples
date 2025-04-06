import React, { useState } from "react";
import { Mesh, BoxGeometry, MeshStandardMaterial, RectAreaLight } from "@orbits/engine";
import { input } from "../utils/controlHelpers.jsx";

export default function RectAreaLightExample(){

    const [ intensity,   setIntensity   ] = useState(50);
    const [ power,       setPower       ] = useState(50);
    const [ color,       setColor       ] = useState("#ffffff");
    const [ modelColor,  setModelColor  ] = useState("#ffffff");
    const [ posX,        setPosX        ] = useState(0);
    const [ posY,        setPosY        ] = useState(-25);
    const [ posZ,        setPosZ        ] = useState(0);
    const [ targetX,     setTargetX     ] = useState(0);
    const [ targetZ,     setTargetZ     ] = useState(0);
    const [ width,       setWidth       ] = useState(20);
    const [ height,      setHeight      ] = useState(20);

    return <>
        
        <RectAreaLight
            position    = { { x: posX, y: posY, z: posZ } }
            lookAt      = { { x: targetX, y:    0, z: targetZ } }
            intensity   = { intensity }
            power       = { power }
            color       = { parseInt(color.replace("#", "0x"))}
            width       = { width }
            height      = { height }
        />


        <Mesh>
            <BoxGeometry         size={[100, 10, 100]} />
            <MeshStandardMaterial color={parseInt(modelColor.replace("#", "0x"))} />
        </Mesh>

        <h1> RectAreaLight </h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/blob/development/src/examples/lights/RectAreaLightExample.jsx"
        > &lt;SOURCE&gt; </a>


<div className="controls-block">
            <p> { input( "Intensity",    { range: [0, 100, 0.01 ], type: "float" }, intensity,   setIntensity  ) } </p>
            <p> { input( "Power",        { range: [0, 100, 0.01 ], type: "float" }, power,       setPower      ) } </p>
            <p> { input( "Color",        { color: true         },                   color,       setColor      ) } </p>
            <p> { input( "Model Color",  { color: true         },                   modelColor,  setModelColor ) } </p>
            <p>
                { input( "Position X",   { range: [-100, 100, 0.01 ], type: "float" }, posX,  setPosX       ) }
                { input( "Position Y",   { range: [-100, 100, 0.01 ], type: "float" }, posY,  setPosY       ) }
                { input( "Position Z",   { range: [-100, 100, 0.01 ], type: "float" }, posZ,  setPosZ       ) }
            </p>
            <p>
                { input( "Target X",    { range: [-100, 100, 0.01 ], type: "float" }, targetX,  setTargetX  ) }
                { input( "Target Z",    { range: [-100, 100, 0.01 ], type: "float" }, targetZ,  setTargetZ  ) }
            </p>
            <p>
                { input( "Width",       { range: [0, 25, 0.01 ], type: "float" }, width,  setWidth  ) }
                { input( "Height",      { range: [0, 25, 0.01 ], type: "float" }, height, setHeight ) }
            </p>
        </div>



    </>;

}