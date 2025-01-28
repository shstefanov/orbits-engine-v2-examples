import {
   
    PerspectiveCamera,
    OrthographicCamera,
    
    Group,
    Mesh,
    MeshLoader,
    Points,
    Line,
    LineSegments,
} from "@orbits/engine";

import * as THREE from "three";

export const geometryObjects = ["Group", "Mesh", "MeshLoader", "Points", "Line", "LineSegments", ];
export const meshChilds      = ["Material", "Geometry", "MeshNode"];
export const sceneObjects    = [...geometryObjects, "PerspectiveCamera", "OrthographicCamera"];

const startFrom = 1737873673919;
let seq      = 1;

function relNow(){
    return Date.now() - startFrom;
}
let prev_id = relNow();
export function getId(){
    let current_id = relNow();
    if(current_id <= prev_id) current_id = prev_id + 1;
    prev_id = current_id;
    return current_id.toString(36).split("").reverse().join("").toUpperCase();
}


export default {
    
    get PerspectiveCamera (){
        return {
            id:        getId(),
            kind:      "PerspectiveCamera",
            children:  [],
            Component: PerspectiveCamera,
            allowedChilds: null,
            ownAttributes: {
                zoom: 1.5, near: 1, far: 10000, fov: 35, up: { x: 0, y: 0, z: 1 },

                controlType: "orbit-controls",
                    target:       { x:  0, y:  0, z: 0 }, // or follow: "my-character"
                    distance:     500,
                    // polarAngle:   0,
                    // azimuthAngle: 0,
                    rotateSpeed:  1,
                    panSpeed:     1,
                    scrollSpeed:  1,
            }
        };
    },

    get OrthographicCamera(){
        return {
            id:            getId(),
            kind:          "OrthographicCamera",
            children:      [],
            Component:     OrthographicCamera,
            allowedChilds: null,
            ownAttributes: {
                zoom: 1.5, near: 1, far: 10000, fov: 35, up: { x: 0, y: 0, z: 1 },
                controlType: "orbit-controls",
                    target:       { x:  0, y:  0, z: 0 }, // or follow: "my-character"
                    distance:     500,
                    polarAngle:   0,
                    azimuthAngle: 0,
                    rotateSpeed:  1,
                    panSpeed:     1,
                    scrollSpeed:  1,
            }
        };
    },

    get Group (){
        return {
            id:        getId(),
            kind:      "Group",
            children:  [],
            Component: Group,
            allowedChilds: geometryObjects,
            ownAttributes: {},
        };
    },

    get Mesh (){
        return {
            id:            getId(),
            kind:          "Mesh",
            children:      [],
            Component:     Mesh,
            allowedChilds: [...meshChilds, ...geometryObjects],
            ownAttributes: {},
        };
    },

    get MeshLoader (){
        return {
            id:            getId(),
            kind:          "MeshLoader",
            children:      [],
            Component:     MeshLoader,
            allowedChilds: [...meshChilds, ...geometryObjects],
            ownAttributes: {},
        };
    },

    get Points (){
        return {
            id:            getId(),
            kind:          "Points",
            children:      [],
            Component:     Points,
            allowedChilds: geometryObjects,
            ownAttributes: {
                points: [ { x:-30, y:0, z: 0}, {x:0, y:0, z: 0}, { x:30, y:0, z: 0} ],
                material: new THREE.PointsMaterial(),
            },
        };
    },

    get Line (){
        return {
            id:            getId(),
            kind:          "Line",
            children:      [],
            Component:     Line,
            allowedChilds: geometryObjects,
            ownAttributes: {
                points: [ { x:-30, y:0, z: 0}, {x:0, y:0, z: 0}, { x:30, y:0, z: 0} ],
                material: new THREE.LineBasicMaterial(),
            },
        };
    },

    get LineSegments (){
        return {
            id:            getId(),
            kind:          "LineSegments",
            children:      [],
            Component:     LineSegments,
            allowedChilds: geometryObjects,
            ownAttributes: {
                points: [ { x:-30, y:0, z: 0}, {x:-20, y:0, z: 0}, { x:20, y:0, z: 0}, { x:30, y:0, z: 0} ],
                material: new THREE.LineBasicMaterial(),
            },
        };
    },

}