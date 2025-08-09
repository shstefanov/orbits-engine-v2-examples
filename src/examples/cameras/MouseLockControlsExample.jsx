import React, { useState, useEffect } from "react";

import { PerspectiveCamera } from "@orbits/engine";

export default function MouseLockControlsExample({children}){

    
    const [ forward,  setForward  ] = useState(0);
    const [ backward, setBackward ] = useState(0);
    const [ right,    setRight    ] = useState(0);
    const [ left,     setLeft     ] = useState(0);

    const [ position, setPosiotion ] = useState({x: 0, y: -100, z: 0});
    const [ rotation, setRotation  ] = useState({x: 0, y: 0, z: 0, order: "XYZ"});

    useEffect(() => {
        let mousedownlistener, mouseuplistener;

        window.addEventListener("keydown", mousedownlistener = ({key}) => {
            switch(key){
                case "w": return setForward(1);
                case "s": return setBackward(1);
                case "a": return setLeft(1);
                case "d": return setRight(1);
            }
        });

        window.addEventListener("keyup", mouseuplistener = ({key}) => {
            switch(key){
                case "w": return setForward(0);
                case "s": return setBackward(0);
                case "a": return setLeft(0);
                case "d": return setRight(0);
            }
        });

        return () => {
            window.removeEventListener("keydown", mousedownlistener );
            window.removeEventListener("keyup",   mouseuplistener   );
        };
    }, []);

    return <PerspectiveCamera
        zoom = { 1.5 }
        near = { 1 }
        far  = { 10000 }
        fov  = { 35 }
        up   = {{ x: 0, y: 0, z: 1 }}

        controlType = "mouse-lock"
        // maxPolarAngle = { Math.PI /  4 }
        // minPolarAngle = { Math.PI / -4 }
        pointerSpeed  = { 0.3 }

        moveForward   = { forward - backward }
        moveRight     = { right - left }

        position      = {position}
        rotation      = {rotation}

        onLock        = { (camera) => { console.log("LOCK");   } }
        onUnlock      = { (camera) => { console.log("UNLOCK"); } }
        onChange      = { (event, camera) => {
            setRotation({ x: camera.rotation._x, y: camera.rotation._y, z: camera.rotation._z, order: camera.rotation._order });
            setPosiotion({ ...camera.position });
        }}
    >

        <h1>Mouse Lock</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/blob/main/src/examples/cameras/MouseLockControlsExample.jsx"
        > &lt;SOURCE&gt; </a>

    </PerspectiveCamera>;
}