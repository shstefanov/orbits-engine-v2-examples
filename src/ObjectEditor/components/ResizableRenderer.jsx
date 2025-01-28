import React, { useEffect, useState, useRef } from "react";
import { OrbitsRenderer } from "@orbits/engine";

export default function ResizableRenderer({children, size}){

    if(!size) return null;
    return <div className="content">
        <OrbitsRenderer
            size={size}
            // autoresize={true}
            style={{ backgroundColor: "black" }}

            // https://threejs.org/docs/?q=renderer#api/en/renderers/WebGLRenderer
            config={{ antialias: true }} // Constructor parameters

            // .... rest of attributes as renderer properties
            >
                { children }
            </OrbitsRenderer>
    </div>
}
