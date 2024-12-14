import React from "react";

import { OrbitsRenderer } from "@orbits/engine";

console.log("OrbitsRenderer", OrbitsRenderer);

export default function App(){
    return <>
        <h1>Orbits Engine Examples App</h1>
        <OrbitsRenderer
            // size={{ width: 800, height: 600 }}
            autoresize={true}
            style={{
                width:  "100%",
                height: "100%",
                backgroundColor: "blue",
            }}
        />
    </>
    
    
    ;
}