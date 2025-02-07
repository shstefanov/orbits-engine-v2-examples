import React, { useState } from "react";
import { Mesh, BoxGeometry, Material, MeshLambertMaterial } from "@orbits/engine";
import * as THREE from "three";

window.THREE = THREE;

export default function MaterialExample(){

    const [ color,       setColor       ] = useState("#ffffff");
    const [ transparent, setTransparent ] = useState(false);
    const [ opacity,     setOpacity     ] = useState(0.5);
    const [ side,        setSide        ] = useState("FrontSide");

    return <>
        
        <Mesh position = {{ x: 0, y: 0, z: 0 }} >
            <BoxGeometry size={[50, 50, 50]} />
            <MeshLambertMaterial
                color       = { parseInt(color.replace("#", "0x")) }
                transparent = { transparent                        }
                opacity     = { opacity                            }
                side        = { side                               }
            />
        </Mesh>

        <h1>Material Attributes</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/blob/development/src/examples/objects/MaterialExample.jsx"
        > &lt;SOURCE&gt; </a>

        <div className="controls-block">
            <p>Color:       <input type="color"    value   = { color       } onChange={ e => setColor(e.target.value)               } /> [{ color                  }]</p>
            <p>Transparent: <input type="checkbox" checked = { transparent } onChange={ e => setTransparent(e.target.checked)       } /> [{ transparent.toString() }]</p>
            <p>Opacity:     <input type="range"    value   = { opacity }     onChange={ e => setOpacity(parseFloat(e.target.value)) } min="0" max="1" step="0.01" /> [{ opacity                }]</p>
            <p>
                Side: <select value={ side } onChange = { e => setSide(e.target.value) }>
                    <option value="FrontSide"  > FrontSide  </option>
                    <option value="BackSide"   > BackSide   </option>
                    <option value="DoubleSide" > DoubleSide </option>
                </select>
                [{ side }]
            </p>

        </div>


    </>;

}