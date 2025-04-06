import React, { useEffect, useState } from "react";
import { Mesh, ConeGeometry, SphereGeometry, MeshBasicMaterial } from "@orbits/engine";
import { input } from "../examples/utils/controlHelpers.jsx";

export default function LookatTest(){

    const [ x, setX ] = useState(0);
    const [ y, setY ] = useState(0);
    const [ z, setZ ] = useState(0);



    return <>

        <Mesh position={{x,y,z}} >
            <SphereGeometry radius = { .5  } />
            <MeshBasicMaterial color={ 0xff00 } wireframe />
        </Mesh>

        <Mesh lookAt={{x,y,z}} up={{x:0,y:0,z:1}} >
            <ConeGeometry
                radius         = { 5  }
                height         = { 10 }
                radialSegments = { 10 }
                heightSegments = { 2  }
            />
            <MeshBasicMaterial color={ 0xffffff } wireframe />
        </Mesh>


        <div className="controls-block">
            <p> { input( "Lookat X",   { range: [-100, 100, 0.1 ], type: "float" }, x, setX  ) } </p>
            <p> { input( "Lookat Y",   { range: [-100, 100, 0.1 ], type: "float" }, y, setY  ) } </p>
            <p> { input( "Lookat Z",   { range: [-100, 100, 0.1 ], type: "float" }, z, setZ  ) } </p>
        </div>
    
    </>


}