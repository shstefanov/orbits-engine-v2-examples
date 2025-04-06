import React, { useEffect, useState } from "react";
import { Mesh, BufferGeometry, MeshBasicMaterial, useRenderer } from "@orbits/engine";

export default function HexOnSphere(){

    const [ radius,     setRadius     ] = useState(50);
    const [ tilesWidth, setTilesWidth ] = useState(8);
    const [ grid,       setGrid       ] = useState([]);

    useEffect(() => {
        setGrid(new SphereHex(radius, tilesWidth));
    }, [radius, tilesWidth]);



    return <>
        
        {grid?.points?.length && <Mesh>
            <BufferGeometry position={grid.points.map( ([p1, p2, p3, p4, p5, p6]) => {
                return [
                    p1, p2, p3,
                    p1, p3, p4,
                    p1, p4, p5,
                    p1, p5, p6,
                ];
            } ).flat()} />
            <MeshBasicMaterial color={ 0x88ff88  } wireframe  />
        </Mesh>}

        <h1>Quaternion</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/blob/development/src/examples/objects/MeshExample.jsx"
        > &lt;SOURCE&gt; </a>


        <div className="controls-block">
            <p>Radius: <input type="range" value = { radius }     onChange={ e => setRadius(parseFloat(e.target.value)) } min="20" max="150" step="0.01" /> [{ radius }]</p>
            <p>Tiles:  <input type="range" value = { tilesWidth } onChange={ e => setTilesWidth(parseInt(e.target.value)) } min="5" max="28" step="1" /> [{ tilesWidth }]</p>
        </div>



    </>;

}





class SphereHex {


    constructor(radius, widthTiles){
        this.radius     = radius;
        this.widthTiles = widthTiles;

        const TWOPI = Math.PI * 2;

        const halfSegment = 1;
        const quarterSegment = 0.5;
        const deg0   = { x: halfSegment, y: 0, z: 0 };
        const deg60  = rotatevec2({ x: halfSegment, y: 0, z: 0 }, TWOPI / 6);
        const deg120 = rotatevec2({ x: halfSegment, y: 0, z: 0 }, TWOPI / 3);
        const deg180 = { x: -halfSegment, y: 0, z: 0 };
        const deg240 = rotatevec2({ x: halfSegment, y: 0, z: 0 }, TWOPI * (2 / 3));
        const deg300 = rotatevec2({ x: halfSegment, y: 0, z: 0 }, TWOPI * (5 / 6));

        const primaryPoints = []; // X will be radial angle on cillinder

        let segCenter = { x: halfSegment, y: 0, z: 0 };

        let minX = 0, maxX = 0, minY = 0, maxY = 0;

        // console.log({widthTiles});
        for(let i = 0; i < widthTiles; i++){


        const hexPoints = [
            addvec(segCenter, deg0),
            addvec(segCenter, deg60),
            addvec(segCenter, deg120),
            addvec(segCenter, deg180),
            addvec(segCenter, deg240),
            addvec(segCenter, deg300),
        ];



        primaryPoints.push(hexPoints);

        segCenter = { x: hexPoints[0].x + quarterSegment, y: hexPoints[1].y, z: 0 };

        const hex2Points = [
            addvec(segCenter, deg0),
            addvec(segCenter, deg60),
            addvec(segCenter, deg120),
            addvec(segCenter, deg180),
            addvec(segCenter, deg240),
            addvec(segCenter, deg300),
        ];

        primaryPoints.push(hex2Points);

        segCenter = { x: hex2Points[0].x + quarterSegment, y: hex2Points[5].y, z: 0 };

        for(let {x, y, z} of hexPoints){
        minX = Math.min(minX, x); maxX = Math.max(maxX, x);
        minY = Math.min(minY, y); maxY = Math.max(maxY, y);
        }

        for(let {x, y, z} of hex2Points){
            minX = Math.min(minX, x); maxX = Math.max(maxX, x);
            minY = Math.min(minY, y); maxY = Math.max(maxY, y);
        }

        continue;

        }

        const rect = {
        width:   widthTiles * 3,
        height:  widthTiles * 0.75, // 1.5,
        shift:   Math.abs(addvec(segCenter, deg60).y - addvec(segCenter, deg300).y),
        primaryPoints,
        }

        const spreadPoints = primaryPoints.slice();
        for(let row = rect.shift; row < ( rect.height - rect.shift ); row += rect.shift){
        const row1Points = primaryPoints.map( hex => hex.map( p => addvec(p, {x: 0, y:  row, z: 0}) ) );
        const row2Points = primaryPoints.map( hex => hex.map( p => addvec(p, {x: 0, y: -row, z: 0}) ) );
        spreadPoints.push(...row1Points);
        spreadPoints.push(...row2Points);
        // Fix bottom as it is slightly disbalanced towards top
        if( (row + rect.shift) >=  (( rect.height - rect.shift )) ){
            const row3Points = primaryPoints.map( hex => hex.map( p => addvec(p, {x: 0, y: -((row + rect.shift)), z: 0}) ) );
            spreadPoints.push(...(row3Points.filter( (p, i) => i % 2 === 1)));
            break;
        }
        }

        const spherePoints = spreadPoints.map( hex => hex.map( p => {
        const xAngle = ((p.x / (rect.width)) * TWOPI);
        const zAngle = Math.asin((p.y / (rect.height)));
        const yRingRadius = Math.cos( zAngle ) * radius;
        const sp =  {
            x: Math.sin(xAngle) * yRingRadius,
            y: (Math.cos(xAngle) * yRingRadius),
            z: ((p.y / (rect.height / 2)) * radius) / 2, //Math.sin(zAngle) * radius,
        };
        return sp;
        }));
        this.points = spherePoints;
    }
}

function rotatevec2({ x, y, z }, angle){
    const sin = Math.sin(angle), cos = Math.cos(angle);
    return {
      x: (x * cos) - (sin * y),
      y: (x * sin) + (cos * y),
      z,
    };
}

function addvec(v1, v2){
    return {
        x: (v1.x || 0) + (v2.x || 0),
        y: (v1.y || 0) + (v2.y || 0),
        z: (v1.z || 0) + (v2.z || 0),
    };
}
 
