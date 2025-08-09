import React from "react";

import { OrbitsRenderer } from "@orbits/engine";


export default function OrbitsRendererExample({children, hideChildren}){

    return <OrbitsRenderer

        autoresize={true}

        // ClassName for canvas domElement
        // Ignored when config.canvas is provided
        className="renderer-canvas-class-name"
        

        // Using css to manage size and position
        style={{
            position:        "absolute",
            right:           "0px",
            width:           "100%",
            height:          "100%",
            backgroundColor: "black",
        }}

        // pixelRatio = { somevalue } // Default is window.devicePixelRatio

        config = {{
            // Constructor options WebGLRenderer
            // https://threejs.org/docs/?q=WebG#api/en/renderers/WebGLRenderer

            // If reference to canvas domElement is provided here,
            // className and style will be ignored
        }}


    >


        <h1>Orbits Renderer</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/tree/blob/main/src/examples/OrbitsRendererExample.jsx"
        > &lt;SOURCE&gt; </a>

        {
            children // Scenes and objects here
        }







    </OrbitsRenderer>;
}