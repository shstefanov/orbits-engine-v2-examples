import React, { useEffect, useState } from "react";
import { Mesh, BoxGeometry, MeshBasicMaterial, useRenderer } from "@orbits/engine";
import * as THREE from "three";

export default function Playground(){

    const renderer = useRenderer()

    const [ x, setX ] = useState(0);
    const [ y, setY ] = useState(0);
    const [ z, setZ ] = useState(0);
    const [ w, setW ] = useState(0);

    const [ mesh, setMesh ] = useState(null);

    useEffect(() => {
        if(!mesh) return;
        mesh.quaternion.set(x,y,z,w);
        renderer.render();

    }, [x, y, z, w, mesh]);



    return <>
        
        {/* With managed geometry and material */}
        <Mesh onCreate={ setMesh }>
            <BoxGeometry       size={[50, 50, 50]} />
            <MeshBasicMaterial color={ 0x88ff88  } />
        </Mesh>

        <h1>Quaternion</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/blob/development/src/examples/objects/MeshExample.jsx"
        > &lt;SOURCE&gt; </a>


        <div className="controls-block">
            <p>X: <input type="range" value = { x } onChange={ e => setX(parseFloat(e.target.value)) } min="-5" max="5" step="0.01" /> [{ x }]</p>
            <p>Y: <input type="range" value = { y } onChange={ e => setY(parseFloat(e.target.value)) } min="-5" max="5" step="0.01" /> [{ y }]</p>
            <p>Z: <input type="range" value = { z } onChange={ e => setZ(parseFloat(e.target.value)) } min="-5" max="5" step="0.01" /> [{ z }]</p>
            <p>W: <input type="range" value = { w } onChange={ e => setW(parseFloat(e.target.value)) } min="-5" max="5" step="0.01" /> [{ w }]</p>
        </div>



    </>;

}