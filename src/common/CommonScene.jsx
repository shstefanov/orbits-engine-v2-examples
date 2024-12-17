import React from "react";
import { OrbitsScene } from "@orbits/engine";

export default function CommonScene({children}){

    return <OrbitsScene
        
        background={[
            '/textures/right.png',
            '/textures/left.png',
            '/textures/top.png',
            '/textures/bottom.png',
            '/textures/front.png',
            '/textures/back.png',
        ]}
    >
        { children }
    </OrbitsScene>;
}