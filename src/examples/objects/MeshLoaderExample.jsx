import React from "react";
import { Mesh, MeshLoader, BoxGeometry, MeshBasicMaterial, PointLight, AmbientLight } from "@orbits/engine";
import * as THREE from "three";


window.THREE = THREE;


const predefinedGeometry  = new THREE.BoxGeometry( 30, 30, 30 );
const predefinedMaterial1 = new THREE.MeshBasicMaterial( {color: 0xff0000} );
const predefinedMaterial2 = new THREE.MeshBasicMaterial( {color: 0xffff00} );



const mesh_json = {
    "metadata":{
        "version":4.6,
        "type":"Object",
        "generator":"Object3D.toJSON"
    },
    "geometries":[
        {"uuid":"1c521c46-8a0e-445e-a8bb-2dcc6e6404a5","type":"BoxGeometry","width":30,"height":30,"depth":30,"widthSegments":1,"heightSegments":1,"depthSegments":1},
        {"uuid":"cc2f99cc-ccf1-4191-9a56-207042d79740","type":"BoxGeometry","width":30,"height":30,"depth":30,"widthSegments":1,"heightSegments":1,"depthSegments":1}
    ],
    "materials":[
        {"uuid":"588aa745-8ccb-4426-b488-873912fb7c96","type":"MeshBasicMaterial","color":65280,"envMapRotation":[0,0,0,"XYZ"],"reflectivity":1,"refractionRatio":0.98,"blendColor":0},
        {"uuid":"acd179e6-220f-4537-9758-bfbdf9fdd076","type":"MeshBasicMaterial","color":16711680,"envMapRotation":[0,0,0,"XYZ"],"reflectivity":1,"refractionRatio":0.98,"blendColor":0},
        {"uuid":"5f7c64fb-74c4-40b7-9b75-20a238d7dd89","type":"MeshBasicMaterial","color":16776960,"envMapRotation":[0,0,0,"XYZ"],"reflectivity":1,"refractionRatio":0.98,"blendColor":0}
    ],
    "object":{
        "uuid":"f622a300-a430-4971-9297-abb892631f00",
        "type":"Mesh",
        "layers":1,
        "matrix":[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],
        "up":[0,1,0],
        "geometry":"1c521c46-8a0e-445e-a8bb-2dcc6e6404a5",
        "material":"588aa745-8ccb-4426-b488-873912fb7c96",
        "children":[
            {
                "uuid":"fd862c51-b086-42fd-9061-2564d794ddf5",
                "type":"Mesh",
                "layers":1,
                "matrix":[1,0,0,0,0,1,0,0,0,0,1,0,100,0,0,1],
                "up":[0,1,0],
                "geometry":"cc2f99cc-ccf1-4191-9a56-207042d79740",
                "material":"acd179e6-220f-4537-9758-bfbdf9fdd076"
            },
            {
                "uuid":"a6e5ba42-26e6-40a4-b61b-301d78c88985",
                "type":"Mesh",
                "layers":1,
                "matrix":[1,0,0,0,0,1,0,0,0,0,1,0,-100,0,0,1],
                "up":[0,1,0],
                "geometry":"cc2f99cc-ccf1-4191-9a56-207042d79740",
                "material":"5f7c64fb-74c4-40b7-9b75-20a238d7dd89"
            }
        ]
    }
};



export default function MeshLoaderExample(){

    return <>
        
        <MeshLoader json={ mesh_json }              position={{ x: 0, y: 0, z:  50 }} />
        <MeshLoader src="/objects/simple_mesh.json" position={{ x: 0, y: 0, z: -50 }} />
       

        <MeshLoader src="/objects/propane/T_Propane.glb"  position={{ x: 0,    y: 0, z: -20 }} rotation={{ x: Math.PI / 2, y: 0, z: 0 }} />
        <MeshLoader src="/objects/propane/T_Propane.gltf" position={{ x: 100,  y: 0, z: -20 }} rotation={{ x: Math.PI / 2, y: 0, z: 0 }} />
        <MeshLoader src="/objects/skull/scene.gltf"       position={{ x: -100, y: 0, z:   0 }} rotation={{ x: Math.PI / 2, y: 0, z: 0 }} scale={30} />


        <h1> Mesh Loader </h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/tree/blob/main/src/examples/objects/MeshLoaderExample.jsx"
        > &lt;SOURCE&gt; </a>

    </>;

}