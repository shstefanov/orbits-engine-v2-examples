import React from "react";

import { createBrowserRouter, Outlet, RouterProvider, Link } from "react-router-dom";

import CommonRenderer from "./common/CommonRenderer";
import CommonScene    from "./common/CommonScene";
import CommonCamera   from "./common/CommonCamera";
import CommonContent  from "./common/CommonContent";

import Homepage              from "examples/Homepage.jsx";
import OrbitsRendererExample from "examples/OrbitsRendererExample.jsx";

import Layout from "./Layout.jsx";

function PassThrough({children}){ return children; }
function Combine({name, Renderer=PassThrough, Scene=PassThrough, Content=PassThrough, Camera=PassThrough}){
    return <>
        {[
            <Renderer key={name}>
                <Scene>
                    <Camera></Camera>
                    <Content></Content>
                </Scene> 
            </Renderer>]}
    </>;
}

function toRouter(object){
    const result = [];
    for(let path in object) result.push({path, element: object[path]});
    return result;
}

const defaults = (components) => Object.assign({
    Renderer: CommonRenderer,
    Camera:   CommonCamera,
    Scene:    CommonScene,
    Content:  CommonContent,
}, components);


export default function App(){
    return <>
        
        <RouterProvider router={createBrowserRouter([
            
            { path: "/", element: <Layout navigation={<>

                Renderer
                    <Link to="/"               >Home           </Link>
                    <Link to="/OrbitsRenderer" >OrbitsRenderer </Link>
                <hr />
            
            </>}> <Outlet /> </Layout>, children: toRouter({
                "":                <Combine { ...({         name: "Homepage",              Content:  Homepage              }) } />,
                "/OrbitsRenderer": <Combine { ...defaults({ name: "OrbitsRendererExample", Renderer: OrbitsRendererExample }) } />,
            })}
        ])} />
        
        
        
        
        
        
        {false && <OrbitsRenderer
            // size={{ width: 800, height: 600 }}
            autoresize={true}
            style={{
                position:        "absolute",
                right:           "0px",
                width:           "calc(100% - 250px)",
                height:          "100%",
                backgroundColor: "black",
                zIndex:          "-1",
            }}
        >

            <div style={{
                position: "absolute",
                width:    "250px",
                height:   "100%",
                overflow: "visible",
            }}>
                <h1>Orbits Engine Examples App</h1>

                <a className="source-code-link" href="/tralalalalala">&lt;SOURCE&gt;</a>




                <OrbitsScene
                    background={[
                       '/textures/right.png',
                       '/textures/left.png',
                       '/textures/top.png',
                       '/textures/bottom.png',
                       '/textures/front.png',
                       '/textures/back.png',
                    ]}
                >

                </OrbitsScene>
            </div>



        </OrbitsRenderer>}
    </>
    
    
    ;
}