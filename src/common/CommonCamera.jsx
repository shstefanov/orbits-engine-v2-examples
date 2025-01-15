import React, { useState } from "react";

import { PerspectiveCamera, AmbientLight, PointLight } from "@orbits/engine";

export default function CommonCamera({children}){

    const [ cameraProps, setCameraProps ] = useState({
        
        zoom: 1.5, near: 1, far: 10000, fov: 35, up: { x: 0, y: 0, z: 1 },

        controlType: "orbit-controls",
            target:       { x:  0, y:  0, z: 0 }, // or follow: "my-character"
            distance:     500,
            polarAngle:   0,
            azimuthAngle: 0,
            rotateSpeed:  1,
            panSpeed:     1,
            scrollSpeed:  1,
    })

    return <PerspectiveCamera
        { ...cameraProps }

        onUpdate = { (props, camera) => setCameraProps(props) }
    >

        <AmbientLight intensity={3} />

        <PointLight intensity={5000} distance={1000} position={{ x: 0, y: 0, z: 0 }} />

        { children }
    
    </PerspectiveCamera>;
}