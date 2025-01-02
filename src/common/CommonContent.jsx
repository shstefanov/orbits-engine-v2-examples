import React from "react";
import { AmbientLight, Box } from "@orbits/engine";
import { MeshBasicMaterial } from "three";

const boxMaterial = new MeshBasicMaterial({ color: 0x774499 });

const boxXMaterial = new MeshBasicMaterial({ color: 0xff0000 });
const boxYMaterial = new MeshBasicMaterial({ color: 0x00ff00 });
const boxZMaterial = new MeshBasicMaterial({ color: 0x0000ff });

export default function CommonContent({children}){
    // add some objects and light here
    return <>
        {/* <AmbientLight intensity={1} /> */}
        <Box
            size={[30, 30, 30]}
            material={boxMaterial}
            position = {{ x: 0, y:  0, z: 0 }}
        />
        <Box size={[10, 10, 10]} material={boxXMaterial} position = {{ x: 40, y:   0, z:  0 }} />
        <Box size={[10, 10, 10]} material={boxYMaterial} position = {{ x:  0, y:  40, z:  0 }} />
        <Box size={[10, 10, 10]} material={boxZMaterial} position = {{ x:  0, y:   0, z: 40 }} />
    </>;
}