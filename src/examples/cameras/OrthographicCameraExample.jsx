import React, { useState } from "react";

import { OrthographicCamera } from "@orbits/engine";

export default function OrthographicCameraExample({children}){

    const [ cameraProps, setCameraProps ] = useState({
        
        // left:  (window.innerWidth - 200) / -2,
        // right: (window.innerWidth - 200) /  2,
        // top:   (window.innerHeight     ) /  2,
        // right: (window.innerHeight     ) / -2,
        zoom: 1, near: 0.1, far: 10000, up: { x: 0, y: 0, z: -1 },

        controlType: "orbit-controls",
            target:       { x:  0, y:  0, z: 0 }, // or follow: "my-character"
            // distance:     500,
            polarAngle:   0,
            azimuthAngle: 0,
            rotateSpeed:  1,
            panSpeed:     1,
            scrollSpeed:  1,
    })

    return <OrthographicCamera
        { ...cameraProps }

        onUpdate = { (props, camera) => setCameraProps(props) }
    >

        <h1>OrthographicCamera</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/blob/development/src/examples/cameras/OrthographicCameraExample.jsx"
        > &lt;SOURCE&gt; </a>




        <div className="controls-block">
            
            <p> Zoom: [{cameraProps.zoom}]
                <input type="range" min="0.1" max="1.9" step="0.1" value={cameraProps.zoom} onChange={ e => {
                    setCameraProps({...cameraProps, zoom: parseFloat(e.target.value)});
                }} />
            </p>

            <p> Polar Angle:
                <input type="range" min={-Math.PI/2} max={Math.PI/2} step="0.1" value={cameraProps.polarAngle} onChange={ e => {
                    setCameraProps({...cameraProps, polarAngle: parseFloat(e.target.value)});
                }} />
            </p>
            
            <p> Azimuth Angle:
                <input type="range" min={-Math.PI*2} max={Math.PI*2} step="0.1" value={cameraProps.azimuthAngle} onChange={ e => {
                    setCameraProps({...cameraProps, azimuthAngle: parseFloat(e.target.value)});
                }} />
            </p>

            {/* <p> Distance:
                <input type="range" min="100" max="1000" step="1" value={cameraProps.distance} onChange={ e => {
                    setCameraProps({...cameraProps, distance: parseInt(e.target.value)});
                }} />
            </p> */}

            <p> Target: 
                x: <input type="range" min="-100" max="100" step="1" value={cameraProps.target.x} onChange={ e => {
                    setCameraProps({...cameraProps, target: { ...cameraProps.target, x: parseFloat(e.target.value) }});
                }} />
                y: <input type="range" min="-100" max="100" step="1" value={cameraProps.target.y} onChange={ e => {
                    setCameraProps({...cameraProps, target: { ...cameraProps.target, y: parseFloat(e.target.value) }});
                }} />
                z: <input type="range" min="-100" max="100" step="1" value={cameraProps.target.z} onChange={ e => {
                    setCameraProps({...cameraProps, target: { ...cameraProps.target, z: parseFloat(e.target.value) }});
                }} />
            </p>

            <p> Rotate Speed:
                <input type="range" min="0.1" max="1.9" step="0.01" value={cameraProps.rotateSpeed} onChange={ e => {
                    setCameraProps({...cameraProps, rotateSpeed: parseFloat(e.target.value)});
                }} />
            </p>

            <p> Pan Speed:
                <input type="range" min="0.1" max="1.9" step="0.01" value={cameraProps.panSpeed} onChange={ e => {
                    setCameraProps({...cameraProps, panSpeed: parseFloat(e.target.value)});
                }} />
            </p>

            <p> Scroll Speed:
                <input type="range" min="0.1" max="1.9" step="0.01" value={cameraProps.scrollSpeed} onChange={ e => {
                    setCameraProps({...cameraProps, scrollSpeed: parseFloat(e.target.value)});
                }} />
            </p>


        </div>

    </OrthographicCamera>;
}