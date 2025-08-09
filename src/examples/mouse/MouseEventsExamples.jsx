import React, { useCallback, useState } from "react";
import { Mesh } from "@orbits/engine";
import * as THREE from "three";

const bigBoxGeometry   = new THREE.BoxGeometry( 30, 30, 30 );
const smallBoxGeometry = new THREE.BoxGeometry( 10, 10, 10 );

const yellowMaterial   = new THREE.MeshPhongMaterial( {color: 0xffff00} );
const redMaterial      = new THREE.MeshPhongMaterial( {color: 0xff0000} );
const blueMaterial     = new THREE.MeshPhongMaterial( {color: 0x0000ff} );
const greenMaterial    = new THREE.MeshPhongMaterial( {color: 0x00ff00} );

const defaultState = {

    click:       0,
    mousedown:   0,
    mouseup:     0,
    contextmenu: 0,

    mousemove:   0,
    mouseover:   0,
    mouseout:    0,
    mouseenter:  0,
    mouseleave:  0,

    dragstart:   0,
    dragstop:    0,
    drag:        0,
    dragover:    0,
    drop:        0,

    bubbling:    true,
};

export default function MouseEventsExample(){

    const [ yellowState, setYellowState ] = useState({ ...defaultState, name: "Yellow", color: "#ffff00", interactive: true });
    const [ redState,    setRedState    ] = useState({ ...defaultState, name: "Red",    color: "#ff0000", interactive: true });
    const [ blueState,   setBlueState   ] = useState({ ...defaultState, name: "Blue",   color: "#0000ff", interactive: true });
    const [ greenState,  setGreenState  ] = useState({ ...defaultState, name: "Green",  color: "#00ff00", interactive: true });

    function createUpdateAttributes(state, setter){
        return {

            // e.preventDefault() in onMouseDown and onDragStart prevents mouse input
            // from being used by camera to rotate while dragging

            // e.stopPropagation stops eventhandlers of parent objects from being triggered
            // In threejs hierarchy event will bubble up to the scene, then in DOM tree
            name: state.name,
            interactive: state.interactive,

            onMouseMove:   e => { !state.bubbling && e.stopPropagation(); setter({...state, mousemove:  ++state.mousemove    })},
            onMouseOver:   e => { !state.bubbling && e.stopPropagation(); setter({...state, mouseover:  ++state.mouseover    })},
            onMouseOut:    e => { !state.bubbling && e.stopPropagation(); setter({...state, mouseout:   ++state.mouseout     })},

            onMouseEnter:  e => { !state.bubbling && e.stopPropagation(); setter({...state, mouseenter: ++state.mouseenter   })},
            onMouseLeave:  e => { !state.bubbling && e.stopPropagation(); setter({...state, mouseleave: ++state.mouseleave   })},

            onClick:       e => { !state.bubbling && e.stopPropagation(); setter({...state, click:      ++state.click        })},
            onMouseDown:   e => { !state.bubbling && e.stopPropagation(); setter({...state, mousedown:  ++state.mousedown    })},
            onMouseUp:     e => { !state.bubbling && e.stopPropagation(); setter({...state, mouseup:    ++state.mouseup      })},

            onContextMenu: e => { !state.bubbling && e.stopPropagation(); setter({...state, contextmenu: ++state.contextmenu })},

            onDragStart:   e => { !state.bubbling && e.stopPropagation(); { e.preventDefault(); setter({...state, dragstart:  ++state.dragstart })}},
            onDragStop:    e => { !state.bubbling && e.stopPropagation(); setter({...state, dragstop:   ++state.dragstop     })},
            onDrag:        e => { !state.bubbling && e.stopPropagation(); setter({...state, drag:       ++state.drag         })},

            onDragOver:    e => { !state.bubbling && e.stopPropagation(); setter({...state, dragover:   ++state.dragover     })},
            onDrop:        e => { !state.bubbling && e.stopPropagation(); setter({...state, drop:       ++state.drop         })},
        };
    }

    return <>
        
        { /* 3D components */ }
        <Mesh
            geometry = { bigBoxGeometry }
            material = { yellowMaterial }
            dropzone="zone-1"
            { ...createUpdateAttributes(yellowState, setYellowState) }
        >
            
            <Mesh
                geometry = { smallBoxGeometry }
                material = { redMaterial      }
                position = {{ x: 15, y: 0, z: 0 }}
                draggable="zone-1"
                { ...createUpdateAttributes(redState, setRedState) }
            />
            
            <Mesh
                geometry = { smallBoxGeometry }
                material = { blueMaterial     }
                position = {{ x: 0, y: 0, z: 15 }}
                { ...createUpdateAttributes(blueState, setBlueState) }
            />

        </Mesh>

        <Mesh
            geometry = { smallBoxGeometry }
            material = { greenMaterial    }
            position = {{ x: 0, y: 50, z: 0 }}
            draggable="zone-1"
            { ...createUpdateAttributes(greenState, setGreenState) }
        />


        { /* HTML components */ } 
        <h1>Mouse Events</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/tree/blob/main/src/examples/mouse/MouseEventsExamples.jsx"
        > &lt;SOURCE&gt; </a>

        <div style={ infoblockStyles } >

            { [ [yellowState, setYellowState], [redState, setRedState], [blueState, setBlueState], [greenState, setGreenState] ].map( ([state, setter]) => {
                
                const style = {...targetBlockStyles, color: state.color };

                const { name, color, ...renderProps } = state;

                return <div key={state.name} style={style}> 
                    { Object.keys(renderProps).map( propname => {
                        const value         = renderProps[propname];
                        return <p key={propname}> {propname}: {value + ''} </p>;
                    }) }
                    <p> Bubbling: <input
                        type="checkbox"
                        checked={state.bubbling}
                        onChange={ e => setter({...state, bubbling: e.target.checked })}
                    /> </p>
                    <p> Interactive: <input
                        type="checkbox"
                        checked={state.interactive}
                        onChange={ e => setter({...state, interactive: e.target.checked })}
                    /> </p>
                </div>})}
        </div>
    </>;
}

const infoblockStyles = {
    width:           "50%",
    height:          "30%",
    left:            "0px",
    bottom:          "0px",
    backgroundColor: "black",
    border:          "1px solid white",
    display:         "flex",
    flexDirection:   "row"
};

const targetBlockStyles = {
    flexGrow:        "1",
    flexShrink:      "0",
    flexBasis:       "20%",
    height:          "100%",
    border:          "1px solid white",
    padding:         "4px",
};