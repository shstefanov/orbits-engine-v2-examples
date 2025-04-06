import React, { useState } from "react";
import { Mesh, BoxGeometry, MeshLambertMaterial, HemisphereLight } from "@orbits/engine";
import { input } from "../utils/controlHelpers.jsx";

export default function HemisphereLightExample(){

    const [ intensity,   setIntensity   ] = useState(1);
    const [ color,       setColor       ] = useState("#ffffff");
    const [ groundColor, setGroundColor ] = useState("#555555");
    const [ modelColor,  setModelColor  ] = useState("#ffffff");
    const [ posX,        setPosX        ] = useState(0);
    const [ posZ,        setPosZ        ] = useState(0);

    return <>
        
        <HemisphereLight
            position    = { { x: posX, y: -100, z: posZ } }
            intensity   = { intensity }
            color       = { parseInt(color.replace("#", "0x"))}
            groundColor = { parseInt(groundColor.replace("#", "0x"))}
        />

        <Mesh>
            <BoxGeometry         size={[100, 10, 100]} />
            <MeshLambertMaterial color={parseInt(modelColor.replace("#", "0x"))} />
        </Mesh>

        <h1> HemisphereLight </h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/blob/development/src/examples/lights/HemisphereLightExample.jsx"
        > &lt;SOURCE&gt; </a>


        <div className="controls-block">
            <p> { input( "Intensity",    { range: [0, 100, 0.01 ], type: "float" }, intensity,   setIntensity   ) } </p>
            <p> { input( "Sky Color",    { color: true         },                   color,       setColor       ) } </p>
            <p> { input( "Ground Color", { color: true         },                   groundColor, setGroundColor ) } </p>
            <p> { input( "Model Color",  { color: true         },                   modelColor,  setModelColor  ) } </p>
            <p>
                { input( "Position X",   { range: [-100, 100, 0.01 ], type: "float" }, posX,  setPosX       ) }
                { input( "Position Z",   { range: [-100, 100, 0.01 ], type: "float" }, posZ,  setPosZ       ) }
            </p>
        </div>



    </>;

}