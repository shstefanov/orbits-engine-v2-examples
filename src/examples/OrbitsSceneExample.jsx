import React from "react";
import { OrbitsScene } from "@orbits/engine";

export default function OrbitsSceneExample({children}){

    return <OrbitsScene
        
        backgroundBlurriness={0}
        backgroundIntensity={0.5}
        background={[
            '/textures/right.png',
            '/textures/left.png',
            '/textures/top.png',
            '/textures/bottom.png',
            '/textures/front.png',
            '/textures/back.png',
        ]}
    >

        <h1>OrbitsScene</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/blob/main/src/examples/OrbitsSceneExample.jsx"
        > &lt;SOURCE&gt; </a>


        { children }
    </OrbitsScene>;
}