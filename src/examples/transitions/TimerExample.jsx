import React, { useState } from "react";
import { Mesh, BoxGeometry, MeshBasicMaterial, Timer } from "@orbits/engine";

export default function TimerExample(){

    const [ speed, setSpeed ] = useState(1);

    return <>

        {/* Only one instance in OrbitsRenderer context */}
        <Timer speed = { speed } />

        <Mesh
            relPeriod = {{
                duration:        13500,
                base: -5000,
                // custom timing function
                timingFunction: phase => 2 * (phase > 0.5 ? 1 - phase : phase),
                position: [ { x: -150, y: 0, z: -30 }, { x: 150, y: 0, z: -30 } ],
                lookAt: [ { x:  -50, y: 0, z: 100 }, { x:  50, y: 0, z: 100 } ],
                scale:  [ 0.8, 1.2 ],
                color:    [ 0x00ff00, 0xffff00 ],
                opacity:  [ 0.2, 0.8 ]
            }}

        >
            <BoxGeometry       size={[30, 30, 30]} />
            <MeshBasicMaterial color={0x00ff00} transparent    />
        </Mesh>

        <Mesh
            relTransition = {{
                duration:        13500,
                base: -5000,
                // custom timing function
                timingFunction: phase => 2 * (phase > 0.5 ? 1 - phase : phase),
                position: [ { x: -150, y: 0, z:  30 }, { x: 150, y: 0, z: 30 } ],
                lookAt: [ { x:  -50, y: 0, z: 100 }, { x:  50, y: 0, z: 100 } ],
                scale:  [ 0.8, 1.2 ],
                color:    [ 0x00ff00, 0xffff00 ],
                opacity:  [ 0.2, 0.8 ]
            }}

        >
            <BoxGeometry       size={[30, 30, 30]} />
            <MeshBasicMaterial color={0x00ff00} transparent    />
        </Mesh>


    
    
        <h1>Timer</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/tree/blob/main/src/examples/transitions/TimerExample.jsx"
        > &lt;SOURCE&gt; </a>

        <div className="controls-block">
            Speed: <input type="range" min="0" max="5" step="0.01" value={speed} onChange={e => setSpeed(parseFloat(e.target.value))} /> [{speed}]
        </div>


    </>;
}