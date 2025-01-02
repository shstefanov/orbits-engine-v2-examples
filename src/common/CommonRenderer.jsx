import React from "react";
import { OrbitsRenderer } from "@orbits/engine";

export default function CommonRenderer({children}){
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

        // https://threejs.org/docs/?q=renderer#api/en/renderers/WebGLRenderer
        config={{ antialias: true }} // Constructor parameters

        // .... rest of attributes as renderer properties
    >
        { children }

    </OrbitsRenderer>;
}