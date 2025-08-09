import React, { useState, useEffect } from "react";
import { InstancedMesh, BoxGeometry, MeshBasicMaterial } from "@orbits/engine";

import { input } from "../utils/controlHelpers.jsx";

export default function InstancedMeshExample(){

    const [ wireframe, setWireframe ] = useState(false);

    const [ obj1, setObj1 ] = useState({ position: { x: -20, y: -20, z: -20 }, rotation: { x: 0, y: 0, z: 1.28 }, scale: { x: 1, y: 1, z: 1 } });
    const [ obj2, setObj2 ] = useState({ position: { x:  20, y:  20, z:  20 }, rotation: { x: 0, y: 0, z: 0    }, scale: { x: 1, y: 1, z: 1 } });

    const [ numObjects, setNumObjects ] = useState(2);

    const [ objects, setObjects ] = useState([ obj1, obj2 ]);

    useEffect( () => {
        objects[0] = obj1;
        objects[1] = obj2;
        objects.state = {}; // This tells useMemo in component to recreate the buffer
        setObjects(objects);
    }, [obj1, obj2]);

    return <>
        
        <InstancedMesh
            interactive onClick = { e => console.log("CLICK", e) }
            instances = { objects }
        >
            <BoxGeometry       size={[30, 30, 30]} />
            <MeshBasicMaterial color={0x00ff00} wireframe = { wireframe } />
        </InstancedMesh>



        <h1>InstancedMesh</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/blob/main/src/examples/objects/InstancedMeshExample.jsx"
        > &lt;SOURCE&gt; </a>



        <div className="controls-block">
            <p> { input( "Wireframe", { checkbox: true }, wireframe, setWireframe ) } </p>
            <p>
                Obj 1
                { input( "Pos X", { range: [ -50, 50, 0.1 ], type: "float" }, obj1.position.x, ( x => setObj1({...obj1, position: {...obj1.position, x }}))  ) }
                { input( "Pos Y", { range: [ -50, 50, 0.1 ], type: "float" }, obj1.position.y, ( y => setObj1({...obj1, position: {...obj1.position, y }}))  ) }
                { input( "Pos Z", { range: [ -50, 50, 0.1 ], type: "float" }, obj1.position.z, ( z => setObj1({...obj1, position: {...obj1.position, z }}))  ) }

                { input( "Rot X", { range: [ -3, 3, 0.1 ], type: "float" }, obj1.rotation.x, ( x => setObj1({...obj1, rotation: {...obj1.rotation, x }}))  ) }
                { input( "Rot Y", { range: [ -3, 3, 0.1 ], type: "float" }, obj1.rotation.y, ( y => setObj1({...obj1, rotation: {...obj1.rotation, y }}))  ) }
                { input( "Rot Z", { range: [ -3, 3, 0.1 ], type: "float" }, obj1.rotation.z, ( z => setObj1({...obj1, rotation: {...obj1.rotation, z }}))  ) }

                { input( "Scale X", { range: [ 0.5, 5, 0.1 ], type: "float" }, obj1.scale.x, ( x => setObj1({...obj1, scale: {...obj1.scale, x }}))  ) }
                { input( "Scale Y", { range: [ 0.5, 5, 0.1 ], type: "float" }, obj1.scale.y, ( y => setObj1({...obj1, scale: {...obj1.scale, y }}))  ) }
                { input( "Scale Z", { range: [ 0.5, 5, 0.1 ], type: "float" }, obj1.scale.z, ( z => setObj1({...obj1, scale: {...obj1.scale, z }}))  ) }
            </p>
            <p>
                Obj 2
                { input( "Pos X", { range: [ -50, 50, 0.1 ], type: "float" }, obj2.position.x, ( x => setObj2({...obj2, position: {...obj2.position, x }}))  ) }
                { input( "Pos Y", { range: [ -50, 50, 0.1 ], type: "float" }, obj2.position.y, ( y => setObj2({...obj2, position: {...obj2.position, y }}))  ) }
                { input( "Pos Z", { range: [ -50, 50, 0.1 ], type: "float" }, obj2.position.z, ( z => setObj2({...obj2, position: {...obj2.position, z }}))  ) }

                { input( "Rot X", { range: [ -3, 3, 0.1 ], type: "float" }, obj2.rotation.x, ( x => setObj2({...obj2, rotation: {...obj2.rotation, x }}))  ) }
                { input( "Rot Y", { range: [ -3, 3, 0.1 ], type: "float" }, obj2.rotation.y, ( y => setObj2({...obj2, rotation: {...obj2.rotation, y }}))  ) }
                { input( "Rot Z", { range: [ -3, 3, 0.1 ], type: "float" }, obj2.rotation.z, ( z => setObj2({...obj2, rotation: {...obj2.rotation, z }}))  ) }

                { input( "Scale X", { range: [ 0.5, 5, 0.1 ], type: "float" }, obj2.scale.x, ( x => setObj2({...obj2, scale: {...obj2.scale, x }}))  ) }
                { input( "Scale Y", { range: [ 0.5, 5, 0.1 ], type: "float" }, obj2.scale.y, ( y => setObj2({...obj2, scale: {...obj2.scale, y }}))  ) }
                { input( "Scale Z", { range: [ 0.5, 5, 0.1 ], type: "float" }, obj2.scale.z, ( z => setObj2({...obj2, scale: {...obj2.scale, z }}))  ) }
            </p>

            <p>
                <button type="button" onClick={e => {
                    if(objects.length > 2){
                        objects.pop();
                        objects.state = {}; // This tells useMemo in component to recreate the buffer
                        setObjects(objects);
                        setNumObjects(objects.length);
                    }
                }}>-</button>
                <button type="button" onClick={e => {
                    objects.push(createRandomItem());
                    objects.state = {}; // This tells useMemo in component to recreate the buffer
                    setObjects(objects);
                    setNumObjects(objects.length);
                }}>+</button>

                [{numObjects}]

            </p>

        </div>



    </>;

}




function createRandomItem(){
    return {
        position: { x: Math.floor(Math.random() * 100) - 50, y: Math.floor(Math.random() * 100) - 50, z: Math.floor(Math.random() * 100) - 50 },
        rotation: { x:   0, y:   0, z:   0 },
        scale:    { x:   1, y:   1, z:   1 }
    };
}