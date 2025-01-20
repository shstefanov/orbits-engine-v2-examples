import React, { useCallback, useState } from "react";
import { Mesh } from "@orbits/engine";
import * as THREE from "three";

const bigBoxGeometry     = new THREE.BoxGeometry( 50, 50, 5 );
const smallBoxGeometry   = new THREE.BoxGeometry( 5, 5, 5 );

const yellowMaterial     = new THREE.MeshPhongMaterial( {color: 0xffff00} );
const greenMaterial      = new THREE.MeshPhongMaterial( {color: 0x00ff00} );
const darkYellowMaterial = new THREE.MeshPhongMaterial( {color: 0xcccc00} );
const darkGreenMaterial  = new THREE.MeshPhongMaterial( {color: 0x00cc00} );

const yellowDropZoneProps  = { geometry: bigBoxGeometry,   material: yellowMaterial,     onDragStart };
const greenDropZoneProps   = { geometry: bigBoxGeometry,   material: greenMaterial,      onDragStart };
const yellowDraggableProps = { geometry: smallBoxGeometry, material: darkYellowMaterial, onDragStart };
const greenDraggableProps  = { geometry: smallBoxGeometry, material: darkGreenMaterial,  onDragStart };

function onDragStart(event) { event.preventDefault(); }

function log(...args){
    // console.log(...args);
}

export default function MouseEventsExample(){

    const [ draggable_positions, setPositions ] = useState([
        { x:  80, y:  60, z: 2.5 },
        // { x:  60, y:  80, z: 2.5 },
        // { x: -80, y: -60, z: 2.5 },
        // { x: -60, y: -80, z: 2.5 },
        // { x:  80, y: -60, z: 27.5 },
        // { x:  60, y: -80, z: 27.5 },
        // { x: -80, y:  60, z: 27.5 },
        // { x: -60, y:  80, z: 27.5 },
    ]);

    const posProps = index => ({
        
        id: "drag-" + index,
        object_index: index,

        position: draggable_positions[index],
        
        onDrag:            e => log("onDrag ",            index ),
        onDragStart:       e => { e.preventDefault(); log("onDragStart ",       index )},
        onDragStop:        e => log("onDragStop ",        index ),
        onDragTroughStart: e => log("onDragTroughStart ", index ),
        onDragTroughEnd:   e => log("onDragTroughEnd ",   index ),
        onDragTrough:      e => log("onDragTrough ",      index ),
        onDragOverStart:   e => log("onDragOverStart ",   index ),
        onDragOverEnd:     e => log("onDragOverEnd ",     index ),
        onDragOver:        e => log("onDragOver ",        index ),
        onDrop:            e => log("onDrop ",            index ),

    });

    const dropZoneProps = name => ({
        id: "drop-" + name,
        onDrop:            e => log(`onDrop            [${name}]`, e ),
        onDragOver:        e => log(`onDragOver        [${name}]`, e ),
        onDragOverStart:   e => log(`onDragOverStart   [${name}]`, e ),
        onDragOverEnd:     e => log(`onDragOverEnd     [${name}]`, e ),
        onDragTrough:      e => log(`onDragTrough      [${name}]`, e ),
        onDragTroughStart: e => log(`onDragTroughStart [${name}]`, e ),
        onDragTroughEnd:   e => log(`onDragTroughEnd   [${name}]`, e ),
    })

    return <>
        
        { /* 3D components */ }

        { /* Drop Zones */ }
        <Mesh { ...yellowDropZoneProps } { ... dropZoneProps("Yellow DropZone 1")}
            position = {{ x: 65, y: 65, z: 0 }}
            dropzone="zone-yellow"
        />

        {/* <Mesh { ...yellowDropZoneProps } { ... dropZoneProps("Yellow DropZone 2")}
            position = {{ x: -65, y: -65, z: 0 }}
            dropzone="zone-yellow"
        />

        <Mesh { ...greenDropZoneProps } { ... dropZoneProps("Green DropZone 1")}
            position = {{ x: -65, y: 65, z: 25 }}
            dropzone="zone-green"
        />

        <Mesh { ...greenDropZoneProps } { ... dropZoneProps("Green DropZone 2")}
            position = {{ x: 65, y: -65, z: 25 }}
            dropzone="zone-green"
        /> */}

        { /* Draggable Objects */ }
        <Mesh { ...yellowDraggableProps } { ...posProps(0) } draggable="zone-yellow" />
        {/* <Mesh { ...yellowDraggableProps } { ...posProps(1) } draggable="zone-yellow" /> */}
        {/* <Mesh { ...yellowDraggableProps } { ...posProps(2) } draggable="zone-yellow" /> */}
        {/* <Mesh { ...yellowDraggableProps } { ...posProps(3) } draggable="zone-yellow" /> */}

        {/* <Mesh { ...greenDraggableProps  } { ...posProps(4) } draggable="zone-yellow" /> */}
        {/* <Mesh { ...greenDraggableProps  } { ...posProps(5) } draggable="zone-yellow" /> */}
        {/* <Mesh { ...greenDraggableProps  } { ...posProps(6) } draggable="zone-yellow" /> */}
        {/* <Mesh { ...greenDraggableProps  } { ...posProps(7) } draggable="zone-yellow" /> */}


        { /* HTML components */ } 
        <h1>Drag and Drop</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/blob/development/src/examples/DragAndDropExample.jsx"
        > &lt;SOURCE&gt; </a>

    </>;
}
