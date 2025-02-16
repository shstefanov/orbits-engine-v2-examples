import React, { useState } from "react";
import { Mesh, MeshBasicMaterial, BufferGeometry } from "@orbits/engine";
import { input } from "../utils/controlHelpers.jsx";



export default function BufferGeometryExample(){

    const [ wireFrame,      setWireframe      ] = useState(false);


    return <>
    
        <Mesh>
            <BufferGeometry
                
                position = {[
                    { x: -100, y: -100, z: 0 }, { x: 100, y: -100, z: 0 }, { x: 100, y: 100, z: 0 }, { x: -100, y: 100, z: 0 }
                ]}

                indices = { [
                    0, 1, 2,    0, 2, 3
                ]}

                normal = {[
                    { x: -20, y: -20, z: 40 }, { x: 20, y: -20, z: 40 }, { x: 20, y: 20, z: 40 }, { x: -20, y: 20, z: 40 }
                ]}

                color = {[
                    { r: 0.8, g: 0, b: 0 }, { r: 0, g: 0.8, b: 0 }, { r: 0, g: 0, b: 0.8 }, { r: 0.8, g: 0.8, b: 0 },
                ]}

                uv = {[
                    { x: 0.61, y: 0.62 }, { x: 0.63, y: 0.64 }, { x: 0.65, y: 0.66 }, { x: 0.67, y: 0.68 }
                ]}
            />
            <MeshBasicMaterial color={0xffffff} wireframe={wireFrame} vertexColors />
        </Mesh>
    
    
    

        <h1>BufferGeometry</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/blob/development/src/examples/geometries/BufferGeometryExample.jsx"
        > &lt;SOURCE&gt; </a>

        <div className="controls-block">
            <p> { input( "Wireframe",       { checkbox: true                       }, wireFrame,      setWireframe      ) } </p>
        </div>
    
    </>;
}
