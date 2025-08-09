import React, { useState } from "react";
import { Mesh, BoxGeometry, MeshLambertMaterial, PointLight } from "@orbits/engine";
import { input } from "../utils/controlHelpers.jsx";

export default function PointLightExample(){

    const [ intensity,   setIntensity   ] = useState(50);
    const [ color,       setColor       ] = useState("#ffffff");
    const [ modelColor,  setModelColor  ] = useState("#ffffff");
    const [ posX,        setPosX        ] = useState(0);
    const [ posY,        setPosY        ] = useState(-15);
    const [ posZ,        setPosZ        ] = useState(0);

    const [ decay,       setDecay       ] = useState(2);
    const [ distance,    setDistance    ] = useState(50);
    const [ power,       setPower       ] = useState(50);

    return <>
        
        <PointLight
            position    = { { x: posX, y: posY, z: posZ } }
            intensity   = { intensity }
            color       = { parseInt(color.replace("#", "0x"))}
            decay       = { decay }
            distance    = { distance }
            power       = { power }
        />


        <Mesh>
            <BoxGeometry         size={[100, 10, 100]} />
            <MeshLambertMaterial color={parseInt(modelColor.replace("#", "0x"))} />
        </Mesh>

        <h1> PointLight </h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/blob/main/src/examples/lights/PointLightExample.jsx"
        > &lt;SOURCE&gt; </a>


        <div className="controls-block">
            <p> { input( "Intensity",    { range: [0, 100, 0.01 ], type: "float" }, intensity,   setIntensity   ) } </p>
            <p> { input( "Color",        { color: true         },                   color,       setColor       ) } </p>
            <p> { input( "Model Color",  { color: true         },                   modelColor,  setModelColor  ) } </p>
            <p>
                { input( "Position X",   { range: [-100, 100, 0.01 ], type: "float" }, posX,  setPosX       ) }
                { input( "Position Y",   { range: [-100, 100, 0.01 ], type: "float" }, posY,  setPosY       ) }
                { input( "Position Z",   { range: [-100, 100, 0.01 ], type: "float" }, posZ,  setPosZ       ) }
            </p>
            <p> { input( "Decay",        { range: [0, 10,   0.01 ], type: "float" }, decay,    setDecay    ) } </p>
            <p> { input( "Distance",     { range: [0, 200,  0.01 ], type: "float" }, distance, setDistance ) } </p>
            <p> { input( "Power",        { range: [0, 1000, 0.01 ], type: "float" }, power,    setPower    ) } </p>
        </div>



    </>;

}