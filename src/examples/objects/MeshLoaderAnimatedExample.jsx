import React, {useState} from "react";
import { Mesh, MeshLoader, BoxGeometry, MeshBasicMaterial, PointLight, AmbientLight } from "@orbits/engine";
import * as THREE from "three";

export default function MeshJSONExample(){

    const [ animation, setAnimation ] = useState("Peashooter|PeashooterAction");

    return <>

        <MeshLoader
            src="/objects/pea/pea.glb"
            scale={20}
            // position={{ x: 0, y: 0, z: 0 }}
            rotation={{ x: Math.PI / 2, y: 0, z: 0 }}
            animation = {animation}
            // animationFade = {2}
        />


        <h1> Mesh Loader (Animated) </h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/blob/main/src/examples/objects/MeshLoaderAnimatedExample.jsx"
        > &lt;SOURCE&gt; </a>


        <button type="button" style={{top: "20px"}} onClick = { () => setAnimation("Peashooter|PeashooterAction")}>Peashooter|PeashooterAction</button>
        <br></br>
        <button type="button" style={{top: "40px"}} onClick = { () => setAnimation("Pea|PeaAction")}>Pea|PeaAction</button>
        <span disabled style={{top: "60px"}}>{animation}</span>



    </>;

}