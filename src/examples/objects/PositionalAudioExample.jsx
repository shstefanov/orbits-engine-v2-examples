import React, { useState } from "react";
import { AudioEffect, PositionalAudio, Mesh, MeshBasicMaterial, BoxGeometry } from "@orbits/engine";
import { input } from "../utils/controlHelpers.jsx";

export default function PositionalAudioExample(){

    const [ enabled,      setEnabled      ] = useState(false);
    const [ play,         setPlay         ] = useState(true);
    const [ helper,       setHelper       ] = useState(false);
    const [ volume,       setVolume       ] = useState(0.5);
    const [ loop,         setLoop         ] = useState(true);
    const [ loopStart,    setLoopStart    ] = useState(0);
    const [ loopEnd,      setLoopEnd      ] = useState(20);
    const [ playbackRate, setPlaybackRate ] = useState(1);

    const [ maxDistance,  setMaxDistance  ] = useState(20);
    const [ refDistance,  setRefDistance  ] = useState(1);
    
    const [ directionalCone1,     setDirectionslCone1     ] = useState(180);
    const [ directionalCone2,     setDirectionslCone2     ] = useState(230);
    const [ directionalCone3,     setDirectionslCone3     ] = useState(0.1);
    const [ rollOffFancorLinear,  setRollOffFactorLinear  ] = useState(0.1);
    const [ rollOffFancorInverse, setRollOffFactorInverse ] = useState(0.1);

    const [ distanceModel, setDistanceModel ] = useState("linear");

    return <>

        {
            enabled && <Mesh
                interactive
                hover = { <AudioEffect src="/audio/Menu Selection Click.wav" /> }
            >
                <BoxGeometry size = {[ 10, 10, 10 ]} segments = {[ 5, 5, 5 ]} />
                <MeshBasicMaterial color={0xffff00} />

                <PositionalAudio
                    position = {{ x: 0, y: 0, z: 0 }}
                    src="/audio/Juhani Junkala [Retro Game Music Pack] Ending.wav"
                    directionalCone = {[ directionalCone1, directionalCone2, directionalCone3 ]}
                    distanceModel   = { distanceModel }
                    rolloffFactor   = { distanceModel === "linear" ? rollOffFancorLinear : rollOffFancorInverse }
                    maxDistance     = { maxDistance  }
                    refDistance     = { refDistance  }
                    play            = { play         }
                    volume          = { volume       }
                    loop            = { loop         }
                    loopStart       = { loopStart    }
                    loopEnd         = { loopEnd      }
                    playbackRate    = { playbackRate }

                    // helper
                />
            </Mesh>
        }
    
        <h1>PositionalAudio</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/tree/blob/main/src/examples/objects/PositionalAudioExample.jsx"
        > &lt;SOURCE&gt; </a>

        { !enabled && 
            <button
                type="button"
                style={{position: "absolute", top: "50%", left: "50%" }}
                onClick={ e => {
                    const audioContext = new AudioContext();
                    audioContext.resume();
                    // setTimeout(() => setEnabled(true), 100);
                    setEnabled(true);
                } }
            >Click to enable audio</button>
        }

        <div className="controls-block">

            <p> { input( "Play",          { checkbox: true }, play, setPlay ) } </p>
            <p> { input( "Loop",          { checkbox: true }, loop, setLoop ) } </p>
            <p> { input( "Helper",        { checkbox: true }, helper, setHelper ) } </p>
            <p> { input( "Volume",        { range: [ 0,     1, 0.01 ], type: "float" }, volume,       setVolume       ) } </p>
            <p> { input( "Loop start",    { range: [ 0,     1, 0.01 ], type: "float" }, loopStart,    setLoopStart    ) } </p>
            <p> { input( "Loop end",      { range: [ 0,    20, 0.01 ], type: "float" }, loopEnd,      setLoopEnd      ) } </p>
            <p> { input( "Playback rate", { range: [ 0.3, 1.7, 0.01 ], type: "float" }, playbackRate, setPlaybackRate ) } </p>
            <p> { input( "Max Distance",  { range: [ 6,    30, 0.01 ], type: "float" }, maxDistance,  setMaxDistance  ) } </p>
            <p> { input( "Ref Distance",  { range: [ 1,    30, 0.01 ], type: "float" }, refDistance,  setRefDistance  ) } </p>

            <p> { input( "Directional Cone 1",  { range: [ 20, 300, 0.01 ], type: "float" }, directionalCone1,  setDirectionslCone1 ) } </p>
            <p> { input( "Directional Cone 2",  { range: [ 20, 300, 0.01 ], type: "float" }, directionalCone2,  setDirectionslCone2 ) } </p>
            <p> { input( "Directional Cone 3",  { range: [  0,   1, 0.01 ], type: "float" }, directionalCone3,  setDirectionslCone3 ) } </p>

            <p> { input( "Rolloff Factor (linear)",   { range: [  0,   1,   0.01 ], type: "float" }, rollOffFancorLinear,  setRollOffFactorLinear  ) } </p>
            <p> { input( "Rolloff Factor (inverse)",  { range: [  0,   100, 0.01 ], type: "float" }, rollOffFancorInverse, setRollOffFactorInverse ) } </p>

            <p>
              Distance Model:
              <button onClick={e => setDistanceModel("linear")}      style={distanceModel === "linear"      ? {textDecoration: "underline"} : {}}> linear      </button>
              <button onClick={e => setDistanceModel("inverse")}     style={distanceModel === "inverse"     ? {textDecoration: "underline"} : {}}> inverse     </button>
              <button onClick={e => setDistanceModel("exponential")} style={distanceModel === "exponential" ? {textDecoration: "underline"} : {}}> exponential </button>
            </p>

        </div>
    
    </>;
}