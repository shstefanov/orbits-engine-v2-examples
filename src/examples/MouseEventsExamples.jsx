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
    mousedown:   false,
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

    return <>
        
    <Mesh
        geometry = { bigBoxGeometry }
        material = { yellowMaterial }

            onMouseMove   = { e => { setYellowState({ ...yellowState, mousemove:   ++yellowState.mousemove   }) }}
            onClick       = { e => { setYellowState({ ...yellowState, clicks:      ++yellowState.clicks      }) }}
            onMouseDown   = { e => { setYellowState({ ...yellowState, mousedown:   true                      }) }}
            onMouseUp     = { e => { setYellowState({ ...yellowState, mousedown:   false                     }) }}
            onContextMenu = { e => { setYellowState({ ...yellowState, contextmenu: ++yellowState.contextmenu }) }}

            // TODO:

            // onMouseOver   = { e => { setYellowState({...yellowState, mouseover:   ++yellowState.mouseover   }) }}
            // onMouseEnter  = { e => { setYellowState({...yellowState, mouseenter:  ++yellowState.mouseenter  }) }}
            // onMouseLeave  = { e => { setYellowState({...yellowState, mouseleave:  ++yellowState.mouseleave  }) }}

            // onDragStart = { e => { e.preventDefault(); console.log("dragstart"); }}
            // onDragStop  = { e => { e.preventDefault(); console.log("dragstop");  }}
            // onDrag      = { e => { e.preventDefault(); console.log("drag");      }}
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
        />






        <h1>Mouse Events</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/blob/main/src/examples/MouseEventsExample.jsx"
        > &lt;SOURCE&gt; </a>

        <p>{JSON.stringify(yellowState)}</p>




    </>;

}