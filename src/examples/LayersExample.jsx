import React, { useEffect, useState } from "react";
import { Mesh, BoxGeometry, MeshBasicMaterial, OrbitsScene } from "@orbits/engine";

export default function LayersExample(){

    const [ clearDepth, setClearDepth ] = useState(true);

    return <>

        <Mesh position={{ x: 50, y: 0, z: 0 }} >
            <BoxGeometry size={[10, 10, 10]}      />
            <MeshBasicMaterial color={ 0xff0000 } />
        </Mesh>

        <OrbitsScene clearDepth = { clearDepth } >
            <Mesh position={{ x: -50, y: 0, z: 0 }} >
                <BoxGeometry size={[10, 10, 10]}      />
                <MeshBasicMaterial color={ 0x00ff00 } />
            </Mesh>
        </OrbitsScene>

        { /* HTML components */ } 
        <h1>Layers</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/tree/blob/main/src/examples/LayersExample.jsx"
        > &lt;SOURCE&gt; </a>

        <div className="controls-block">
            <p>Clear Depth: <input type="checkbox" checked = { clearDepth } onChange={ e => setClearDepth(e.target.checked) } /> </p>
        </div>

    </>
}