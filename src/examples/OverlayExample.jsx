import React, { useState } from "react";
import { Mesh, BoxGeometry, MeshBasicMaterial } from "@orbits/engine";

export default function OverlayExample(){

    const [ overlay,  setOverlay  ] = useState(true);
    const [ underlay, setUnderlay ] = useState(false);


    return <>
        
        <Mesh position = {{ x: -50, y: 0, z: 0 }} >
            <BoxGeometry       size={[30, 30, 30]} />
            <MeshBasicMaterial color={0x00ff00}    />
        </Mesh>

        <Mesh position = {{ x: 50, y: 0, z: 0 }} overlay = {overlay} underlay = {underlay} >
            <BoxGeometry       size={[30, 30, 30]} />
            <MeshBasicMaterial color={0xffff00}    />
        </Mesh>

        <h1>Mesh</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/tree/blob/main/src/examples/OverlayExample.jsx"
        > &lt; SOURCE &gt; </a>

        <div className="controls-block">
            <label>
                Yellow Overlay: <input type="checkbox" checked = {overlay} onChange = { e => {
                    setOverlay(e.target.checked);
                    setUnderlay(false);
                } } />
                Yellow Underlay: <input type="checkbox" checked = {underlay} onChange = { e => {
                    setOverlay(false);
                    setUnderlay(e.target.checked);
                } } />
            </label>

        </div>




    </>;

}