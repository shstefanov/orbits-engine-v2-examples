import React, { Children } from "react";

import { OrbitsRenderer, OrbitsScene } from "@orbits/engine";


export default function OrbitsRendererExample({children, hideChildren}){

    return <OrbitsRenderer
        // size={{ width: 800, height: 600 }}
        autoresize={true}
        style={{
            position:        "absolute",
            right:           "0px",
            width:           "100%",
            height:          "100%",
            backgroundColor: "black",
        }}
    >


        <h1>OrbitsRenderer</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/blob/main/src/examples/OrbitsRendererExample.jsx"
        > &lt;SOURCE&gt; </a>

        {
            children // Scenes and objects here
        }







    </OrbitsRenderer>;
}