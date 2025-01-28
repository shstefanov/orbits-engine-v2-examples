import React, { useState } from "react";
import ResizableSidebar  from  "./components/ResizableSidebar.jsx";
import ResizableRenderer from  "./components/ResizableRenderer.jsx";

import { SceneBrowser, SceneMounter } from "./components/SceneBuilder.jsx";

function getStoredScenes(){
    const result = [];
    for(let key in localStorage){
        if(key.indexOf("Scene.") === 0) result.push(JSON.parse(localStorage[key]));
    }
    return result;
}

export default function ObjectEditor(){

    const [ contentSize, setContentSize ] = useState(null);
    const [ data,        setLocalData   ] = useState({
        currentScene: null,
        scenes: getStoredScenes(),
        expand: {},
    });

    function setData(data){
        for(let scene of data.scenes){
            localStorage[`Scene.${scene.id}`] = JSON.stringify(scene);
        }
        setLocalData(data);
    }

    return <div className="object-editor">
        <div className="toolbar">

        </div>
        <div className="main">
            <ResizableSidebar onChangeSize={ width => {
                setContentSize({ width: window.innerWidth - (width + 5), height: window.innerHeight - 50 });
            }}>
                <SceneBrowser data={data} setData={setData} />
            </ResizableSidebar>
            <ResizableRenderer size={contentSize}>
                <SceneMounter data={data} setData={setData} />
            </ResizableRenderer>
        </div>
        <div className="toolbar">
            
        </div>
    </div>;
}


function handleResize(e, setSize){

}