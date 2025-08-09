import React, { useState, useEffect } from "react";
import { BatchedMesh, BoxGeometry, SphereGeometry, MeshBasicMaterial } from "@orbits/engine";

import { input } from "../utils/controlHelpers.jsx";
import { RGBAIntegerFormat } from "three";

export default function BatchedMeshExample(){

    const [ wireframe, setWireframe ] = useState(false);


    const [ instances, setInstances ] = useState({
                
        "sphere": [
            { position: { x: -20, y: -20, z: -20 }, rotation: { x: 0, y: 0, z: 1.28 }, scale: { x: 1, y: 1, z: 1 }, color: 0xff0000 },
            { position: { x: -20, y:  20, z: -20 }, rotation: { x: 0, y: 0, z: 1.28 }, scale: { x: 1, y: 1, z: 1 }, color: 0xffff00 }
        ],
        
        "box": [
            { position: { x:  20, y:  20, z: -20 }, rotation: { x: 0, y: 0, z: 1.28 }, scale: { x: 1, y: 1, z: 1 }, color: 0x0000ff },
            { position: { x:  20, y: -20, z: -20 }, rotation: { x: 0, y: 0, z: 1.28 }, scale: { x: 1, y: 1, z: 1 }, color: 0x00ffff }
        ],

    });

    return <>

        {/* WARNING - this component is not optimized for handling large batches ! */}
        <BatchedMesh
            
            maxInstanceCount = { 1000  }
            maxVertexCount   = { 16000 }
            maxIndexCount    = { 24000 }

            instances = { instances }

        >
            {/* The material used */}
            <MeshBasicMaterial color={ 0xffffff } wireframe = { wireframe } />

            {/* The geometries with id attributes */}
            <BoxGeometry id="box"
                size = {[ 5, 5, 5 ]}
                segments = {[ 2, 2, 2 ]}
            />

            <SphereGeometry id = "sphere"
                radius         = { 5           }
                widthSegments  = { 20          }
                heightSegments = { 20          }
                thetaStart     = { 0           }
                thetaLength    = { Math.PI * 2 }
                phiStart       = { 0           }
                phiLength      = { Math.PI     }
            />



        </BatchedMesh>




        
        <h1>BatchedMesh</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/tree/blob/main/src/examples/objects/BatchedMeshExample.jsx"
        > &lt;SOURCE&gt; </a>



        <div className="controls-block">
            <p> { input( "Wireframe", { checkbox: true }, wireframe, setWireframe ) } </p>
            <br />
            <p>
                <button type="button" disabled = {instances.box.length < 3} onClick = { e => {
                    instances.box.pop();
                    setInstances({...instances});
                }}>-</button>
                &nbsp;&nbsp;Box&nbsp;&nbsp;
                <button type="button" disabled = {instances.box.length > 20} onClick = { e => {
                    instances.box.push( randomObject() );
                    setInstances({...instances});
                }}>+</button>
                [ { instances.box.length } ]
            </p>

            <p>
                <button type="button" disabled = {instances.sphere.length < 3} onClick = { e => {
                    instances.sphere.pop();
                    setInstances({...instances});
                }}>-</button>
                Sphere
                <button type="button" disabled = {instances.sphere.length > 20} onClick = { e => {
                    instances.sphere.push( randomObject() );
                    setInstances({...instances});
                }}>+</button>
                [ { instances.sphere.length } ]
            </p>



        </div>



    </>;

}


function randomObject(){
    return {
        position: { x: random(-50, 50),           y: random(-50, 50),           z: random(-50, 50) },
        rotation: { x: random(-Math.PI, Math.PI), y: random(-Math.PI, Math.PI), z: random(-Math.PI, Math.PI) },
        scale:    { x: random(0.4, 1.6),          y: random(0.4, 1.6),          z: random(0.4, 1.6) },
        color: Math.floor(random(0x000000, 0xffffff)),
    };
}

function random(from, to){ return from + ( Math.random() * (to - from) ); }
