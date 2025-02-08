import React, { useState } from "react";
import { Mesh, BoxGeometry, MeshBasicMaterial } from "@orbits/engine";

export default function TransitionExample(){

    const [ reset, setReset ] = useState(Date.now());

    return <>
    
        {/* With managed geometry and material */}
        {[
            <Mesh
                key={reset + 1}
                transition = {{
                    duration:        3500,
                    // delay:           300,
                    timingFunction: "LINEAR",
                    position: [ { x: -150, y: 0, z: 50 }, { x: 150, y: 0, z: 50 } ],
                    rotation: [ { x:  -5, y: 0, z: 0 }, { x:  5, y: 0, z: 0 } ],
                }}
            
            >
                <BoxGeometry       size={[30, 30, 30]} />
                <MeshBasicMaterial color={0x00ff00}    />
            </Mesh>,

            <Mesh
                key={reset + 2}
                period = {{
                    duration:        3500,
                    // custom timing function
                    timingFunction: phase => 2 * (phase > 0.5 ? 1 - phase : phase),
                    position: [ { x: -150, y: 0, z: 0 }, { x: 150, y: 0, z: 0 } ],
                    lookAt: [ { x:  -50, y: 0, z: 100 }, { x:  50, y: 0, z: 100 } ],
                    scale:  [ 0.8, 1.2 ],
                    color:    [ 0x00ff00, 0xffff00 ],
                    opacity:  [ 0.2, 0.8 ]
                }}

                >
                <BoxGeometry       size={[30, 30, 30]} />
                <MeshBasicMaterial color={0x00ff00} transparent    />
            </Mesh>,

            <Mesh
                key={reset - 1}
                transition = {{
                    duration:        3500,
                    // delay:           300,
                    timingFunction: "EASE_IN_OUT_SINE",
                    position: [ { x: -150, y: 0, z: -50 }, { x: 150, y: 0, z: -50 } ],
                    rotation: [ { x:  -5, y: 0, z: 0 }, { x:  5, y: 0, z: 0 } ],
                }}

            >
                <BoxGeometry       size={[30, 30, 30]} />
                <MeshBasicMaterial color={0x00ff00}    />
            </Mesh>,
    
        ]}
    
        <h1>Transition</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/blob/development/src/examples/transitions/TransitionExample.jsx"
        > &lt;SOURCE&gt; </a>

        <div className="controls-block">
            <button type="button" onClick={e => setReset(Date.now())}>RESET</button>
        </div>


    </>;
}