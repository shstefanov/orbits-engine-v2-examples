import React, { useState } from "react";
import { Mesh, BoxGeometry, MeshLambertMaterial, AmbientLight } from "@orbits/engine";
import { input } from "../utils/controlHelpers.jsx";

export default function AmbientLightExample(){

    const [ intensity,  setIntensity  ] = useState(1);
    const [ color,      setColor      ] = useState("#ffffff");
    const [ modelColor, setModelColor ] = useState("#ffffff");


    return <>
        
        <AmbientLight intensity={intensity} color={color} />

        <Mesh>
            <BoxGeometry         size={[100, 5, 100]} />
            <MeshLambertMaterial color={parseInt(modelColor.replace("#", "0x"))} />
        </Mesh>

        <h1> AmbientLight </h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/blob/development/src/examples/lights/AmbientLightExample.jsx"
        > &lt;SOURCE&gt; </a>


        <div className="controls-block">
            <p> { input( "Intensity",   { range: [0, 10, 0.01 ], type: "float" }, intensity,  setIntensity  ) } </p>
            <p> { input( "Color",       { color: true         },                  color,      setColor      ) } </p>
            <p> { input( "Model Color", { color: true         },                  modelColor, setModelColor ) } </p>
        </div>



    </>;

}