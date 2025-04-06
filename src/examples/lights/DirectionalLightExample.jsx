import React, { useState } from "react";
import { Mesh, BoxGeometry, MeshLambertMaterial, DirectionalLight, AmbientLight } from "@orbits/engine";
import { input } from "../utils/controlHelpers.jsx";

export default function DirectionalLightExample(){

    const [ intensity,  setIntensity  ] = useState(1);
    const [ color,      setColor      ] = useState("#ffffff");
    const [ modelColor, setModelColor ] = useState("#ffffff");
    const [ posX,       setPosX       ] = useState(0);
    const [ posZ,       setPosZ       ] = useState(0);
    const [ targetX,    setTargetX    ] = useState(0);
    const [ targetZ,    setTargetZ    ] = useState(0);


    return <>

        {/* <AmbientLight/> */}
        
        <DirectionalLight
            position  = { { x: posX, y: -100, z: posZ } }
            target    = { { x: targetX, y:    0, z: targetZ } }
            intensity = { intensity }
            color     = { parseInt(color.replace("#", "0x"))}
        />

        <Mesh>
            <BoxGeometry         size={[100, 10, 100]} />
            <MeshLambertMaterial color={parseInt(modelColor.replace("#", "0x"))} />
        </Mesh>

        <h1> AmbientLight </h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/blob/development/src/examples/lights/AmbientLightExample.jsx"
        > &lt;SOURCE&gt; </a>


        <div className="controls-block">
            <p> { input( "Intensity",   { range: [0, 100, 0.01 ], type: "float" }, intensity, setIntensity  ) } </p>
            <p> { input( "Color",       { color: true         },                  color,      setColor      ) } </p>
            <p> { input( "Model Color", { color: true         },                  modelColor, setModelColor ) } </p>
            <p>
                { input( "Position X",  { range: [-100, 100, 0.01 ], type: "float" }, posX,  setPosX       ) }
                { input( "Position Z",  { range: [-100, 100, 0.01 ], type: "float" }, posZ,  setPosZ       ) }
            </p>
            <p>
                { input( "Target X",    { range: [-100, 100, 0.01 ], type: "float" }, targetX,  setTargetX  ) }
                { input( "Target Z",    { range: [-100, 100, 0.01 ], type: "float" }, targetZ,  setTargetZ  ) }
            </p>
        </div>



    </>;

}