import React, { useEffect, useMemo } from "react";

import * as THREE from "three";

import {
    OrbitsScene,
    PerspectiveCamera,
    OrthographicCamera,
    Group,
    Line,
} from "@orbits/engine";

import childTypes, { sceneObjects, getId } from "./utils/childTypes.js";
import { update } from "three/examples/jsm/libs/tween.module.js";

const materialLoader = new THREE.MaterialLoader();
const objectLoader = new THREE.ObjectLoader();




export function SceneBrowser({data, setData, setScene}){

    function addScene(){
        setData({ ...data, scenes: [ ...data.scenes, { kind: "Scene", id: getId(), children: [] } ] });
    }

    function deleteScene(scene_id){
        delete localStorage[`Scene.${scene_id}`];
        setData({
            ...data,
            currentScene: scene_id === data.currentScene ? null : data.currentScene,
            scenes: data.scenes.filter( ({id}) => scene_id !== id)
        });
    }

    return <>
            
            
            <div className="sidebar-toolbar">
                <button type="button" onClick={ addScene } >Add Scene</button>

                <select value="0" onChange={e => console.log(e.target.value)}>
                    <option value="0">Add Object</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>

            </div>
            
            <div className="sidebar-content">

                {
                    data.scenes.map( (scene, index) => {

                        const path = ["scenes", index];
                        const expanded = data.expand[scene.id];
                        const active = data.currentScene === scene.id;

                        return <React.Fragment key={scene.id}>
                            <div className="tree-branch" >

                                { scene.id }
                                
                                <button
                                    type="button"
                                    className="pull-left"
                                    onClick={ e => setData({...data, expand: {...data.expand, [scene.id]: !data.expand[scene.id]}})}
                                > { expanded ? '⯆' : '⯅' } </button>
                                
                                <button type="button" className="pull-right"
                                    onClick={ e => setData({...data, currentScene: active ? null : scene.id}) }
                                    style={ active ? {color: "red"} : {} }
                                > { active ? '⯀' : '▶' }  </button>
                                
                                <button type="button" className="pull-right" onClick={e => {
                                    const scene_data = JSON.stringify(scene);
                                    console.log(JSON.parse(scene_data));
                                }}> 🖫 </button>

                                <button type="button" className="pull-right" onClick={e => {
                                    deleteScene(scene.id)
                                }}> 🗑 </button>

                                <AddObject className="pull-right"
                                    allowedChilds={sceneObjects}
                                    onAdd = { object => {
                                        scene.children.push(object);
                                        setData({...data});
                                    }}
                                
                                />

                                {/*  ▶  ⬏ ⬐ ⯅ ⯆ 🖪 🖫 🗑 🖉 */}






                            </div>

                            {
                                expanded && scene.children.map( (child, index) => {
                                    return <SidebarItem
                                        key      = { index            }
                                        data     = { child            }
                                        path     = { [...path, index] }
                                        expanded = { data.expand      }
                                        update   = { object => {
                                            scene.children[index] = object;
                                            setData({...data});
                                        }}

                                        destroy = { () => {
                                            scene.children.splice(index, 1);
                                            setData({...data});
                                        }}
                                    />;
                                })
                            }

                        </React.Fragment>;
                    })
                }
            </div>
            
            <div className="sidebar-toolbar">
                <input type="text" />
            </div>
    </>;




}

function Indentation({path, children, className, style={} }){
    return <div className={className} style={{...style, marginLeft: `${path.length - 2}em`}}>
        { children }
    </div>
}

function AddObject({onAdd, className, allowedChilds}){

    if(!allowedChilds) return null;
    return <select value="0" className={className} onChange={
        e => {
            onAdd({ ...childTypes[e.target.value] });
        }
    }>
        
        <option value="0">+</option>
        {allowedChilds.map( opt => <option key={opt} value={opt}>{opt}</option>)}

    </select>
}


function SidebarItem({ path, data, update, destroy, expanded }){

    const { allowedChilds, ...object} = data;
    const is_expanded = !!expanded[object.id];

    return <>
        <Indentation path={path} className="tree-branch">

            <button
                type="button"
                className="pull-left"
                onClick={ e => {
                    expanded[object.id] = !expanded[object.id];
                    update(object);
                }}
            > { is_expanded ? '⯆' : '⯅' } </button>

            [{ object.kind }] { object.id }

            <button type="button" className="pull-right" onClick={ destroy }> 🗑 </button>

            <AddObject className="pull-right" allowedChilds={allowedChilds} onAdd={
                child => {
                    object.children.push(child);
                    update(object);
                }
            } />


        </Indentation>

        {
            is_expanded && object.children.map( ( child, index ) => <SidebarItem
                key={child.id}
                path={ [...path, index] }
                data = {child}
                update = { data => {
                    object.children[index] = data;
                    update(object)
                }}
                destroy = { () => {
                    object.children.splice(index, 1);
                    update(object);
                }}
                expanded = {expanded}
            />)
        }
    </>;
}








































export function SceneMounter({data, setData}){

    const scene = data.scenes.find( ({id}) => id === data.currentScene ) || null;

    console.log("SCENE MOUNTER: ", scene);

    if(!scene) return null;

    const { children, ...sceneProps } = scene;

    return <>{[
        <OrbitsScene {...sceneProps} key={sceneProps.id}>
           { children.map( (child, index) => {
                const { children, ...obj } = child;
                return <SceneItem
                    key={obj.id}
                    childs={children}
                    {...obj}
                    object={child}
                    update={ obj => { children[index] = obj; setData({...data}) }}
                />

           })} 
        </OrbitsScene> 
    ]}</>
}


function SceneItem({ id, kind, childs, Component, ownAttributes, update, object }){

    if(!Component){
        const base = { ...childTypes[kind] };
        object.Component = base.Component;
        if(ownAttributes.hasOwnProperty("material")){
            object.ownAttributes.material = materialLoader.parse(ownAttributes.material);
        }
        if(ownAttributes.hasOwnProperty("geometry")){
            object.ownAttributes.geometry = objectLoader.parseGeometries(ownAttributes.geometry);
        }

        setTimeout( () => update({...object}), 0);

        return null;
    }

    return <Component id={id} {...ownAttributes}>
           { childs.map( (child, index) => {
                const { children, ...obj } = child;
                return <SceneItem key={obj.id} childs={children} {...obj} object={child} update={ data => {
                    childs[index] = data;
                    update();
                } } />
           })} 
    </Component>;
}