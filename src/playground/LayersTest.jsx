import React, { useEffect, useState } from "react";
import { Mesh, BoxGeometry, MeshBasicMaterial, OrbitsScene } from "@orbits/engine";

export default function LayersTest(){

    const [ clearDepth, setClearDepth ] = useState(true);

    return <>

        <Mesh
            interactive title="test Title"
            // hover={{ color: 0xffff00 }}
            position={{ x: 50, y: 0, z: 0 }}
        >
            <BoxGeometry size={[10, 10, 10]}      />
            <MeshBasicMaterial color={ 0xff0000 } />
        </Mesh>

        <OrbitsScene clearDepth = { clearDepth } >
            <Mesh position={{ x: -50, y: 0, z: 0 }} >
                <BoxGeometry size={[10, 10, 10]}      />
                <MeshBasicMaterial color={ 0x00ff00 } />
            </Mesh>
        </OrbitsScene>

        <div className="controls-block">
            <p>Clear Depth: <input type="checkbox" checked = { clearDepth } onChange={ e => setClearDepth(e.target.checked) } /> </p>
        </div>

    </>
}