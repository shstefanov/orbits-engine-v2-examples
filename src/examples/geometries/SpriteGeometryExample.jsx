import React, { useState } from "react";
import { Sprite, SpriteMaterial } from "@orbits/engine";
import * as THREE from "three";
import { input } from "../utils/controlHelpers.jsx";

const spriteMaterial = new THREE.SpriteMaterial({
    map: new THREE.TextureLoader().load( '/images/cursor-orange.png' ),
    color: 0xff0000,
    sizeAttenuation: false,
});

export default function SpriteGeometryExample(){

    const [ rotation, setRotation ] = useState(0);
    const [ centerX,  setCenterX  ] = useState(0);
    const [ centerY,  setCenterY  ] = useState(0);

    return <>
        
        <Sprite
            position = {{ x: -50, y: 0, z: 0 }}
            scale = {0.01}
            material = { spriteMaterial}
        />

        <Sprite
            position = {{ x: 50, y: 0, z: 0 }}
            center = {{ x: centerX, y: centerY }} // Between 0 and 1
        >
            <SpriteMaterial
                map="/images/cursor-orange.png"
                rotation = { rotation }
                color={0xffff00} 
            />
        </Sprite>

        <h1>Sprite</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/tree/blob/main/src/examples/geometries/SpriteGeometryExample.jsx"
        > &lt;SOURCE&gt; </a>


        <div className="controls-block">
            <p> { input( "Center X", { range: [0, 1, 0.01],          type: "float" }, centerX,  setCenterX  ) } </p>
            <p> { input( "Center Y", { range: [0, 1, 0.01],          type: "float" }, centerY,  setCenterY  ) } </p>
            <p> { input( "Rotation", { range: [ 0, Math.PI*2, 0.01], type: "float" }, rotation, setRotation ) } </p>
        </div>

    </>;

}
