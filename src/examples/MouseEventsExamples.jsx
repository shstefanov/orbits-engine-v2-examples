import React, { useCallback, useState } from "react";
import { Mesh } from "@orbits/engine";
import * as THREE from "three";

const bigBoxGeometry   = new THREE.BoxGeometry( 30, 30, 30 );
const smallBoxGeometry = new THREE.BoxGeometry( 10, 10, 10 );

const yellowMaterial  = new THREE.MeshPhongMaterial( {color: 0xffff00} );
const redMaterial     = new THREE.MeshPhongMaterial( {color: 0xff0000} );
const greenMaterial   = new THREE.MeshPhongMaterial( {color: 0x00ff00} );
const blueMaterial    = new THREE.MeshPhongMaterial( {color: 0x0000ff} );

const defaultState = {
    clicks:      0,
    mousedown:   null,
    mousemove:   0,
    contextmenu: 0,

    mouseover:   0,
    mouseenter:  0,
    mouseleave:  0,
}

export default function MouseEventsExample(){

    const parentClick = useCallback( e => console.log("Parent Click", e ));
    const parentMove  = useCallback( e => console.log("Parent Move",  e ));

    const childClick  = useCallback( e => {
        e.stopPropagation();
    });

    const [ yellowState, setYellowState ] = useState({ ...defaultState });
    const [ redState,    setRedState    ] = useState({ ...defaultState });
    const [ blueState,   setBlueState   ] = useState({ ...defaultState });


    (yellowState.clicks >= yellowState.mouseUpTS) && console.log("component click-mouseup", yellowState.clicks - yellowState.mouseUpTS);


    return <>
        
    <Mesh
        geometry = { bigBoxGeometry }
        material = { yellowMaterial }

            // onMouseMove   = { e => console.log("mousemove") }
            // onMouseOver   = { e => console.log("mouseover", e.intersection.point) }
            // onMouseOut    = { e => console.log("mouseout",  e.intersection.point) }
            
            // onMouseEnter  = { e => console.log("mouseenter",  e.intersection.point) }
            // onMouseLeave  = { e => console.log("mouseleave",  e.intersection.point) }
            
            
            // onClick       = { e => console.log("click",  e.intersection.point) }
            // onMouseDown   = { e => console.log("mousedown",  e.intersection.point) }
            // onMouseUp     = { e => console.log("mouseup",  e.intersection.point) }


            // onContextMenu = { e => console.log("contextmenu",  e.intersection.point) }

            // TODO:

            // onDragStart = { e => {
            //     e.preventDefault(); // Stops camera controls
            //     console.log("dragstart", e.intersection.point);
            // }}
            
            // onDrag = { e => console.log("drag",  e.ray, e.dragSource ) }
            // onDragStop  = { e => console.log("dragstop",  e.ray) }

            onDragOver = { e => console.log("dragover",  e.ray, e.dragSource ) }
            onDrop     = { e => console.log("drop",      e.ray, e.dragSource ) }


        >
            <Mesh
                geometry = { smallBoxGeometry }
                material = { redMaterial      }
                position = {{ x: 50, y: 0, z: 0 }}
                onClick = { e => {
                    e.stopPropagation();
                    console.log( "Child Click with stop event bubbling" );
                }}
            />
            <Mesh
                geometry = { smallBoxGeometry }
                material = { blueMaterial     }
                position = {{ x: 0, y: 0, z: 15 }}
                onClick  = { e => {
                    console.log( "Child Click" );
                }}
            />
        </Mesh>

        <Mesh
            geometry = { smallBoxGeometry }
            material = { greenMaterial    }
            position = {{ x: 0, y: 50, z: 0 }}

            // Allows dragging and stops camera controls
            onDragStart = { e =>  e.preventDefault() }
            


        />






        <h1>Mouse Events</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/blob/main/src/examples/MouseEventsExample.jsx"
        > &lt;SOURCE&gt; </a>

        <p>{JSON.stringify(yellowState)}</p>




    </>;

}