import React, { useState } from "react";
import { Audio } from "@orbits/engine";
import { input } from "../utils/controlHelpers.jsx";
export default function AudioExample(){

    const [enabled,       setEnabled      ] = useState(false);
    const [ src,          setSrc          ] = useState("/audio/Juhani Junkala [Retro Game Music Pack] Title Screen.wav");
    const [ play,         setPlay         ] = useState(true);
    const [ volume,       setVolume       ] = useState(0.5);
    const [ loop,         setLoop         ] = useState(true);
    const [ loopStart,    setLoopStart    ] = useState(0);
    const [ loopEnd,      setLoopEnd      ] = useState(1);
    const [ playbackRate, setPlaybackRate ] = useState(1);

    return <>
    
        {   enabled && 
            
            <Audio
                src          = { src          }
                play         = { play         }
                volume       = { volume       }
                loop         = { loop         }
                loopStart    = { loopStart    }
                loopEnd      = { loopEnd      }
                playbackRate = { playbackRate }
            />
        }

    
        <h1>Audio</h1>

        <a className="source-code-link"
            href="https://github.com/shstefanov/orbits-engine-v2-examples/tree/blob/main/src/examples/objects/AudioExample.jsx"
        > &lt;SOURCE&gt; </a>



        { !enabled && 
            <button
                type="button"
                style={{position: "absolute", top: "50%", left: "50%" }}
                onClick={ e => {
                    const audioContext = new AudioContext();
                    audioContext.resume();
                    setTimeout(() => setEnabled(true), 100);
                    // setEnabled(true);
                } }
            >Click to enable audio</button>
        }

        <div className="controls-block">


            <p>
                <button type="button" onClick={ e => setSrc("/audio/Juhani Junkala [Retro Game Music Pack] Title Screen.wav") } > Title Screen </button>
                <button type="button" onClick={ e => setSrc("/audio/Juhani Junkala [Retro Game Music Pack] Level 1.wav")      } > Level 1      </button>
                <button type="button" onClick={ e => setSrc("/audio/Juhani Junkala [Retro Game Music Pack] Level 2.wav")      } > Level 2      </button>
                <button type="button" onClick={ e => setSrc("/audio/Juhani Junkala [Retro Game Music Pack] Level 3.wav")      } > Level 3      </button>
                <button type="button" onClick={ e => setSrc("/audio/Juhani Junkala [Retro Game Music Pack] Ending.wav")       } > Ending       </button>

                
            </p>
            
            <br />
            <p> { input( "Play", { checkbox: true }, play, setPlay ) } </p>

            <br />
            <p> { input( "Loop", { checkbox: true }, loop, setLoop ) } </p>

            <br />
            { input( "Volume", { range: [ 0, 1, 0.01 ], type: "float" }, volume, setVolume) }

            <br />
            { input( "Loop start", { range: [ 0, 1, 0.01 ], type: "float" }, loopStart, setLoopStart) }

            <br />
            { input( "Loop end", { range: [ 0, 1, 0.01 ], type: "float" }, loopEnd, setLoopEnd) }

            <br />
            { input( "Playback rate", { range: [ 0.3, 1.7, 0.01 ], type: "float" }, playbackRate, setPlaybackRate) }




        </div>
    
    </>;
}