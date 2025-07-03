import React, { useState, useEffect } from "react";
import { SkinnedMesh, Mesh, BufferGeometry, MeshBasicMaterial } from "@orbits/engine";
import { input } from "../utils/controlHelpers.jsx";

const base = [{ x: 0, y: -5, z: -5 }, { x: 0, y: -5, z: 5 }, { x: 0, y: 5, z: 5 }, { x: 0, y: 5, z: -5 }];
const segmentNormals = [{x: 0, y: -1, z: -1}, {x: 0, y: -1, z: 1}, {x: 0, y: 1, z: 1}, {x: 0, y: 1, z: -1}];

function segmentIndices(offset){ return [0,4,1, 4,5,1,  1,6,2, 6,1,5, 2,7,3, 2,6,7, 0,3,7, 0,7,4].map( n => n + offset ); }

const geometry = <BufferGeometry
    position={[
        ...translate(base, {x: -20,    y: 0, z: 0 } ), // 4 points
        
        ...translate(base, {x: -16.66, y: 0, z: 0 } ), // 4 points
        ...translate(base, {x: -13.33, y: 0, z: 0 } ), // 4 points
        
        ...translate(base, {x: -10,    y: 0, z: 0 } ), // 4 points
        
        ...translate(base, {x: -6.66,  y: 0, z: 0 } ), // 4 points
        ...translate(base, {x: -3.33,  y: 0, z: 0 } ), // 4 points
        
        ...translate(base, {x:     0,  y: 0, z: 0 } ), // 4 points
    ]}

    normal = {[
        ...segmentNormals, ...segmentNormals, ...segmentNormals, ...segmentNormals,
        ...segmentNormals, ...segmentNormals, ...segmentNormals,
    ]}

    indices = {[
        ...segmentIndices(0),
        ...segmentIndices(4),
        ...segmentIndices(8),
        ...segmentIndices(12),
        ...segmentIndices(16),
        ...segmentIndices(20),
    ]}

    skinIndex = {[
        ...repeat(4, [0,1,2,0]),
        ...repeat(4, [0,1,2,0]),
        ...repeat(4, [0,1,2,0]),
        ...repeat(4, [0,1,2,0]),
        ...repeat(4, [0,1,2,0]),
        ...repeat(4, [0,1,2,0]),
        ...repeat(4, [0,1,2,0]),
    ]}

    skinWeight = {[
        ...repeat(4, [   1,   0,   0,   0 ]),
        ...repeat(4, [ 2/3, 1/3,   0,   0 ]),
        ...repeat(4, [ 1/3, 2/3,   0,   0 ]),
        ...repeat(4, [   0,   1,   0,   0 ]),
        ...repeat(4, [   0,   2/3, 1/3, 0 ]),
        ...repeat(4, [   0,   1/3, 2/3, 0 ]),
        ...repeat(4, [   0,   0,   1,   0 ]),
    ]}
/>;

export default function SkinnedMeshExample(){

    const [ wireframe, setWireframe ] = useState(false);
    const [ skinHelper, setSkinHelper ] = useState(false);

    const [ bone0PosX, setBone0PosX ] = useState(-20); const [ bone0RotX, setBone0RotX ] = useState(0); const [ bone0ScaleX, setBone0ScaleX ] = useState(1);
    const [ bone0PosY, setBone0PosY ] = useState(0);   const [ bone0RotY, setBone0RotY ] = useState(0); const [ bone0ScaleY, setBone0ScaleY ] = useState(1);
    const [ bone0PosZ, setBone0PosZ ] = useState(0);   const [ bone0RotZ, setBone0RotZ ] = useState(0); const [ bone0ScaleZ, setBone0ScaleZ ] = useState(1);

    const [ bone1PosX, setBone1PosX ] = useState(10);  const [ bone1RotX, setBone1RotX ] = useState(0); const [ bone1ScaleX, setBone1ScaleX ] = useState(1);
    const [ bone1PosY, setBone1PosY ] = useState(0);   const [ bone1RotY, setBone1RotY ] = useState(0); const [ bone1ScaleY, setBone1ScaleY ] = useState(1);
    const [ bone1PosZ, setBone1PosZ ] = useState(0);   const [ bone1RotZ, setBone1RotZ ] = useState(0); const [ bone1ScaleZ, setBone1ScaleZ ] = useState(1);

    const [ bone2PosX, setBone2PosX ] = useState(10);  const [ bone2RotX, setBone2RotX ] = useState(0); const [ bone2ScaleX, setBone2ScaleX ] = useState(1);
    const [ bone2PosY, setBone2PosY ] = useState(0);   const [ bone2RotY, setBone2RotY ] = useState(0); const [ bone2ScaleY, setBone2ScaleY ] = useState(1);
    const [ bone2PosZ, setBone2PosZ ] = useState(0);   const [ bone2RotZ, setBone2RotZ ] = useState(0); const [ bone2ScaleZ, setBone2ScaleZ ] = useState(1);

    return <>

        <SkinnedMesh skinHelper = {skinHelper}>

            { geometry }

            <MeshBasicMaterial color={0xffff00} wireframe = { wireframe } side="DoubleSide" />

            <SkinnedMesh.Bone         index = { 0 } position = { { x: bone0PosX, y: bone0PosY, z: bone0PosZ } } rotation = { { x: bone0RotX, y: bone0RotY, z: bone0RotZ } } scale = { { x: bone0ScaleX, y: bone0ScaleY, z: bone0ScaleZ } } >
                <SkinnedMesh.Bone     index = { 1 } position = { { x: bone1PosX, y: bone1PosY, z: bone1PosZ } } rotation = { { x: bone1RotX, y: bone1RotY, z: bone1RotZ } } scale = { { x: bone1ScaleX, y: bone1ScaleY, z: bone1ScaleZ } } >
                    <SkinnedMesh.Bone index = { 2 } position = { { x: bone2PosX, y: bone2PosY, z: bone2PosZ } } rotation = { { x: bone2RotX, y: bone2RotY, z: bone2RotZ } } scale = { { x: bone2ScaleX, y: bone2ScaleY, z: bone2ScaleZ } } >
                    </SkinnedMesh.Bone>
                </SkinnedMesh.Bone>
            </SkinnedMesh.Bone>


        </SkinnedMesh>



        <h1>SkinnedMesh</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/blob/development/src/examples/objects/SkinnedMeshExample.jsx"
        > &lt;SOURCE&gt; </a>



        <div className="controls-block">
            <p> { input( "Wireframe",     { checkbox: true }, wireframe,  setWireframe  ) } </p>
            <p> { input( "Skin Helper",   { checkbox: true }, skinHelper, setSkinHelper ) } </p>

            <p>
                { input( "Bone 0 posX",   { range: [-30, -10, 0.01 ], type: "float" }, bone0PosX, setBone0PosX ) }
                { input( "Bone 0 posY",   { range: [-20,  20, 0.01 ], type: "float" }, bone0PosY, setBone0PosY ) }
                { input( "Bone 0 posZ",   { range: [-20,  20, 0.01 ], type: "float" }, bone0PosZ, setBone0PosZ ) }

                { input( "Bone 0 rotX",   { range: [-Math.PI, Math.PI, 0.01 ], type: "float" }, bone0RotX, setBone0RotX ) }
                { input( "Bone 0 rotY",   { range: [-Math.PI, Math.PI, 0.01 ], type: "float" }, bone0RotY, setBone0RotY ) }
                { input( "Bone 0 rotZ",   { range: [-Math.PI, Math.PI, 0.01 ], type: "float" }, bone0RotZ, setBone0RotZ ) }

                { input( "Bone 0 scaleX", { range: [0.5, 1.5, 0.01 ], type: "float" }, bone0ScaleX, setBone0ScaleX ) }
                { input( "Bone 0 scaleY", { range: [0.5, 1.5, 0.01 ], type: "float" }, bone0ScaleY, setBone0ScaleY ) }
                { input( "Bone 0 scaleZ", { range: [0.5, 1.5, 0.01 ], type: "float" }, bone0ScaleZ, setBone0ScaleZ ) }
            </p>

            <p>
                { input( "Bone 1 posX",   { range: [  0, 20,  0.01 ], type: "float" }, bone1PosX, setBone1PosX ) }
                { input( "Bone 1 posY",   { range: [-20, 20,  0.01 ], type: "float" }, bone1PosY, setBone1PosY ) }
                { input( "Bone 1 posZ",   { range: [-20, 20,  0.01 ], type: "float" }, bone1PosZ, setBone1PosZ ) }

                { input( "Bone 1 rotX",   { range: [-Math.PI, Math.PI, 0.01 ], type: "float" }, bone1RotX, setBone1RotX ) }
                { input( "Bone 1 rotY",   { range: [-Math.PI, Math.PI, 0.01 ], type: "float" }, bone1RotY, setBone1RotY ) }
                { input( "Bone 1 rotZ",   { range: [-Math.PI, Math.PI, 0.01 ], type: "float" }, bone1RotZ, setBone1RotZ ) }

                { input( "Bone 1 scaleX", { range: [0.5, 1.5, 0.01 ], type: "float" }, bone1ScaleX, setBone1ScaleX ) }
                { input( "Bone 1 scaleY", { range: [0.5, 1.5, 0.01 ], type: "float" }, bone1ScaleY, setBone1ScaleY ) }
                { input( "Bone 1 scaleZ", { range: [0.5, 1.5, 0.01 ], type: "float" }, bone1ScaleZ, setBone1ScaleZ ) }
            </p>

            <p>
                { input( "Bone 2 posX",   { range: [  0, 20,  0.01 ], type: "float" }, bone2PosX, setBone2PosX ) }
                { input( "Bone 2 posY",   { range: [-20, 20,  0.01 ], type: "float" }, bone2PosY, setBone2PosY ) }
                { input( "Bone 2 posZ",   { range: [-20, 20,  0.01 ], type: "float" }, bone2PosZ, setBone2PosZ ) }

                { input( "Bone 2 rotX",   { range: [-Math.PI, Math.PI, 0.01 ], type: "float" }, bone2RotX, setBone2RotX ) }
                { input( "Bone 2 rotY",   { range: [-Math.PI, Math.PI, 0.01 ], type: "float" }, bone2RotY, setBone2RotY ) }
                { input( "Bone 2 rotZ",   { range: [-Math.PI, Math.PI, 0.01 ], type: "float" }, bone2RotZ, setBone2RotZ ) }

                { input( "Bone 2 scaleX", { range: [0.5, 1.5, 0.01 ], type: "float" }, bone2ScaleX, setBone2ScaleX ) }
                { input( "Bone 2 scaleY", { range: [0.5, 1.5, 0.01 ], type: "float" }, bone2ScaleY, setBone2ScaleY ) }
                { input( "Bone 2 scaleZ", { range: [0.5, 1.5, 0.01 ], type: "float" }, bone2ScaleZ, setBone2ScaleZ ) }
            </p>

        </div>

    </>;
}

function translate(points, direction){
    return points.map( ({x,y,z}) => ({x: x + direction.x, y: y + direction.y, z: z + direction.z}) );
}

function repeat(n, obj){
    const result = Array(n);
    for(let i = 0; i < n; i++) result[i] = obj;
    return result;
}
