import React from "react";

import { createBrowserRouter, Outlet, RouterProvider, Link } from "react-router-dom";

// import ObjectEditor   from "./ObjectEditor/editor.jsx";

import CommonRenderer from "./common/CommonRenderer";
import CommonScene    from "./common/CommonScene";
import CommonCamera   from "./common/CommonCamera";
import CommonContent  from "./common/CommonContent";

import Homepage                    from "examples/Homepage.jsx";
import OrbitsRendererExample       from "examples/OrbitsRendererExample.jsx";
import OrbitsSceneExample          from "examples/OrbitsSceneExample.jsx";
import OverlayExample              from "examples/OverlayExample.jsx";

import PerspectiveCameraExample    from "examples/cameras/PerspectiveCameraExample.jsx";
import OrthographicCameraExample   from "examples/cameras/OrthographicCameraExample.jsx";
import ArrayCameraExample          from "examples/cameras/ArrayCameraExample.jsx";
import MouseLockControlsExample    from "examples/cameras/MouseLockControlsExample.jsx";

import MeshExample                 from "examples/objects/MeshExample.jsx";
import MeshLoaderExample           from "examples/objects/MeshLoaderExample.jsx";
import MeshLoaderAnimatedExample   from "examples/objects/MeshLoaderAnimatedExample.jsx";

import MouseEventsExample          from "examples/mouse/MouseEventsExamples.jsx";
import DragAndDropExample          from "examples/mouse/DragAndDropExample.jsx";
import HoverExample                from "examples/mouse/HoverExample.jsx";
import CursorExample               from "examples/mouse/CursorExample.jsx";
import HitBoxExample               from "examples/mouse/HitBoxExample.jsx";

import PointsGeometryExample       from "examples/geometries/PointsGeometryExample.jsx";
import LineGeometryExample         from "examples/geometries/LineGeometryExample.jsx";
import LineSegmentsGeometryExample from "examples/geometries/LineSegmentsGeometryExample.jsx";
import TrianglesGeometryExample    from "examples/geometries/TrianglesGeometryExample.jsx";
import BoxGeometryExample          from "examples/geometries/BoxGeometryExample.jsx";
import CapsuleGeometryExample      from "examples/geometries/CapsuleGeometryExample.jsx";
import SphereGeometryExample       from "examples/geometries/SphereGeometryExample.jsx";

import CircleGeometryExample       from "examples/geometries/CircleGeometryExample.jsx";
import RingGeometryExample         from "examples/geometries/RingGeometryExample.jsx";
import PlaneGeometryExample        from "examples/geometries/PlaneGeometryExample.jsx";
import ShapeGeometryExample        from "examples/geometries/ShapeGeometryExample.jsx";

import ConeGeometryExample         from "examples/geometries/ConeGeometryExample.jsx";
import CylinderGeometryExample     from "examples/geometries/CylinderGeometryExample.jsx";
import TorusGeometryExample        from "examples/geometries/TorusGeometryExample.jsx";
import TorusKnotGeometryExample    from "examples/geometries/TorusKnotGeometryExample.jsx";
import DodecahedronGeometryExample from "examples/geometries/DodecahedronGeometryExample.jsx";
import IcosahedronGeometryExample  from "examples/geometries/IcosahedronGeometryExample.jsx";
import OctahedronGeometryExample   from "examples/geometries/OctahedronGeometryExample.jsx";
import TetrahedronGeometryExample  from "examples/geometries/TetrahedronGeometryExample.jsx";

import TubeGeometryExample         from "examples/geometries/TubeGeometryExample.jsx";
import ExtrudeGeometryExample      from "examples/geometries/ExtrudeGeometryExample.jsx";
import LatheGeometryExample        from "examples/geometries/LatheGeometryExample.jsx";
import PolyhedronGeometryExample   from "examples/geometries/PolyhedronGeometryExample.jsx";

import BufferGeometryExample       from "examples/geometries/BufferGeometryExample.jsx";



import GroupExample                from "examples/GroupExample.jsx";
import MaterialExample             from "examples/MaterialExample.jsx";

import TransitionExample           from "examples/transitions/TransitionExample.jsx";
import TimerExample                from "examples/transitions/TimerExample.jsx";

import Playground                  from "./Playground.jsx";

import Layout from "./Layout.jsx";

export default function App(){
    return <>
        
        <RouterProvider router={createBrowserRouter([
            // { path: "/object-editor", element: <ObjectEditor /> },
            { path: "/", element: <Layout navigation={<>


                   <Link to="/"                     > Home                  </Link>
                   
                <br /><hr /> Renderer <hr />
                   <Link to="/OrbitsRenderer"       > OrbitsRenderer         </Link>
                   

                <br /><hr /> Scene <hr />
                   <Link to="/OrbitsScene"          > OrbitsScene            </Link>
                   <Link to="/Overlay"              > Overlay                </Link>
                
                <br /><hr /> Camera <hr />
                   <Link to="/PerspectiveCamera"    > Perspective Camera     </Link>
                   <Link to="/OrthographicCamera"   > Orthographic Camera    </Link>
                   <Link to="/ArrayCamera"          > Array Camera           </Link>
                   <Link to="/MouseLock"            > Mouse Lock             </Link>
                
                <br /><hr /> Objects <hr />
                   <Link to="/Mesh"                 > Mesh                   </Link>
                   <Link to="/MeshLoader"           > Mesh Loader            </Link>
                   <Link to="/MeshLoaderAnimated"   > Mesh Loader (Animated) </Link>
                   <Link to="/Group"                > Group                  </Link>

                <br /><hr /> Mouse <hr />
                   <Link to="/MouseEvents"          > Mouse Events           </Link>
                   <Link to="/DragAndDrop"          > Drag and Drop          </Link>
                   <Link to="/Hover"                > Hover                  </Link>
                   <Link to="/Cursor"               > Cursor                 </Link>
                   <Link to="/HitBox"               > HitBox                 </Link>

                <br /><hr /> Geometries <hr />
                    <Link to="/PointsGeometry"       > Points                 </Link>
                    
                    <Link to="/LineGeometry"         > Line                   </Link>
                    <Link to="/LineSegmentsGeometry" > Line Segments          </Link>
                    
                    <Link to="/TrianglesGeometry"    > Triangles              </Link>
                    <Link to="/PlaneGeometry"        > PlaneGeometry          </Link>
                    <Link to="/CircleGeometry"       > CircleGeometry         </Link>
                    <Link to="/RingGeometry"         > RingGeometry           </Link>
                    <Link to="/ShapeGeometry"        > ShapeGeometry          </Link>
                    
                    <Link to="/BoxGeometry"          > BoxGeometry            </Link>
                    <Link to="/CapsuleGeometry"      > CapsuleGeometry        </Link>
                    <Link to="/ConeGeometry"         > ConeGeometry           </Link>
                    <Link to="/CylinderGeometry"     > CylinderGeometry       </Link>
                    <Link to="/TorusGeometry"        > TorusGeometry          </Link>
                    <Link to="/TorusKnotGeometry"    > TorusKnotGeometry      </Link>
                    <Link to="/SphereGeometry"       > SphereGeometry         </Link>

                    <Link to="/DodecahedronGeometry" > DodecahedronGeometry   </Link>
                    <Link to="/IcosahedronGeometry"  > IcosahedronGeometry    </Link>
                    <Link to="/OctahedronGeometry"   > OctahedronGeometry     </Link>
                    <Link to="/TetrahedronGeometry"  > TetrahedronGeometry    </Link>

                    <Link to="/LatheGeometry"        > LatheGeometry          </Link>
                    <Link to="/PolyhedronGeometry"   > PolyhedronGeometry     </Link>
                    <Link to="/ExtrudeGeometry"      > ExtrudeGeometry        </Link>
                    <Link to="/TubeGeometry"         > TubeGeometry           </Link>

                    <Link to="/BufferGeometry"       > BufferGeometry         </Link>



                <br /><hr /> Transitions <hr />
                    <Link to="/Transition"           > Transition             </Link>
                    <Link to="/Timer"                > Timer                  </Link>

                <br /><hr /> Materials <hr />
                    <Link to="/Material"             > Material               </Link>
            
            </>}> <Outlet /> </Layout>, children: toRouter({
                "":                      <Combine { ...({         name: "Homepage",                  Content:  Homepage                    }) } />,
                "/OrbitsRenderer":       <Combine { ...defaults({ name: "OrbitsRendererExample",     Renderer: OrbitsRendererExample       }) } />,
                "/OrbitsScene":          <Combine { ...defaults({ name: "OrbitsSceneExample",        Scene:    OrbitsSceneExample          }) } />,
                "/Overlay":              <Combine { ...defaults({ name: "OverlayExample",            Content:  OverlayExample              }) } />,
                
                "/PerspectiveCamera":    <Combine { ...defaults({ name: "PerspectiveCameraExample",  Camera:   PerspectiveCameraExample    }) } />,
                "/OrthographicCamera":   <Combine { ...defaults({ name: "OrthographicCameraExample", Camera:   OrthographicCameraExample   }) } />,
                "/ArrayCamera":          <Combine { ...defaults({ name: "ArrayCameraExample",        Camera:   ArrayCameraExample          }) } />,
                "/MouseLock":            <Combine { ...defaults({ name: "MouseLockExample",          Camera:   MouseLockControlsExample    }) } />,

                "/Mesh":                 <Combine { ...defaults({ name: "MeshExample",               Content:  MeshExample                 }) } />,
                "/MeshLoader":           <Combine { ...defaults({ name: "MeshLoaderExample",         Content:  MeshLoaderExample           }) } />,
                "/MeshLoaderAnimated":   <Combine { ...defaults({ name: "MeshLoaderAnimatedExample", Content:  MeshLoaderAnimatedExample   }) } />,

                "/MouseEvents":          <Combine { ...defaults({ name: "MouseEventsExample",        Content:  MouseEventsExample          }) } />,
                "/DragAndDrop":          <Combine { ...defaults({ name: "DragAndDropExample",        Content:  DragAndDropExample          }) } />,
                "/Hover":                <Combine { ...defaults({ name: "HoverExample",              Content:  HoverExample                }) } />,
                "/Cursor":               <Combine { ...defaults({ name: "CursorExample",             Content:  CursorExample               }) } />,
                "/HitBox":               <Combine { ...defaults({ name: "HitBoxExample",             Content:  HitBoxExample               }) } />,


                "/PointsGeometry":       <Combine { ...defaults({ name: "PointsGeometryExample",     Content:  PointsGeometryExample       }) } />,
                "/LineGeometry":         <Combine { ...defaults({ name: "LineGeometryExample",       Content:  LineGeometryExample         }) } />,
                "/LineSegmentsGeometry": <Combine { ...defaults({ name: "LineSegmentsGeometry",      Content:  LineSegmentsGeometryExample }) } />,
                "/TrianglesGeometry":    <Combine { ...defaults({ name: "TrianglesGeometry",         Content:  TrianglesGeometryExample    }) } />,

                "/CircleGeometry":       <Combine { ...defaults({ name: "CircleGeometry",            Content:  CircleGeometryExample       }) } />,
                "/RingGeometry":         <Combine { ...defaults({ name: "RingGeometry",              Content:  RingGeometryExample         }) } />,
                "/PlaneGeometry":        <Combine { ...defaults({ name: "PlaneGeometry",             Content:  PlaneGeometryExample        }) } />,
                "/ShapeGeometry":        <Combine { ...defaults({ name: "ShapeGeometry",             Content:  ShapeGeometryExample        }) } />,

                "/BoxGeometry":          <Combine { ...defaults({ name: "BoxGeometry",               Content:  BoxGeometryExample          }) } />,
                "/CapsuleGeometry":      <Combine { ...defaults({ name: "CapsuleGeometry",           Content:  CapsuleGeometryExample      }) } />,
                "/SphereGeometry":       <Combine { ...defaults({ name: "SphereGeometry",            Content:  SphereGeometryExample       }) } />,
                "/TorusGeometry":        <Combine { ...defaults({ name: "TorusGeometry",             Content:  TorusGeometryExample        }) } />,
                "/TorusKnotGeometry":    <Combine { ...defaults({ name: "TorusKnotGeometry",         Content:  TorusKnotGeometryExample    }) } />,

                "/ConeGeometry":         <Combine { ...defaults({ name: "ConeGeometry",              Content:  ConeGeometryExample         }) } />,
                "/CylinderGeometry":     <Combine { ...defaults({ name: "CylinderGeometry",          Content:  CylinderGeometryExample     }) } />,
                "/DodecahedronGeometry": <Combine { ...defaults({ name: "DodecahedronGeometry",      Content:  DodecahedronGeometryExample }) } />,
                "/IcosahedronGeometry":  <Combine { ...defaults({ name: "IcosahedronGeometry",       Content:  IcosahedronGeometryExample  }) } />,
                "/OctahedronGeometry":   <Combine { ...defaults({ name: "OctahedronGeometry",        Content:  OctahedronGeometryExample   }) } />,
                "/TetrahedronGeometry":  <Combine { ...defaults({ name: "TetrahedronGeometry",       Content:  TetrahedronGeometryExample  }) } />,
                
                "/ExtrudeGeometry":      <Combine { ...defaults({ name: "ExtrudeGeometry",           Content:  ExtrudeGeometryExample      }) } />,
                "/TubeGeometry":         <Combine { ...defaults({ name: "TubeGeometry",              Content:  TubeGeometryExample         }) } />,
                "/LatheGeometry":        <Combine { ...defaults({ name: "LatheGeometry",             Content:  LatheGeometryExample        }) } />,
                "/PolyhedronGeometry":   <Combine { ...defaults({ name: "PolyhedronGeometry",        Content:  PolyhedronGeometryExample   }) } />,

                "/BufferGeometry":       <Combine { ...defaults({ name: "BufferGeometry",            Content:  BufferGeometryExample       }) } />,


                "/Group":                <Combine { ...defaults({ name: "Group",                     Content:  GroupExample                }) } />,
                "/Material":             <Combine { ...defaults({ name: "Material",                  Content:  MaterialExample             }) } />,

                "/Transition":           <Combine { ...defaults({ name: "Transition",                Content:  TransitionExample           }) } />,
                "/Timer":                <Combine { ...defaults({ name: "Timer",                     Content:  TimerExample                }) } />,


                "/Playground":           <Combine { ...defaults({ name: "Playground",                Content:  Playground                  }) } />,
            })}
        ])} />
        
        
        
        
        
        
        {false && <OrbitsRenderer
            // size={{ width: 800, height: 600 }}
            autoresize={true}
            style={{
                position:        "absolute",
                right:           "0px",
                width:           "calc(100% - 250px)",
                height:          "100%",
                backgroundColor: "black",
                zIndex:          "-1",
            }}
        >

            <div style={{
                position: "absolute",
                width:    "250px",
                height:   "100%",
                overflow: "visible",
            }}>
                <h1>Orbits Engine Examples App</h1>

                <a className="source-code-link" href="/tralalalalala">&lt;SOURCE&gt;</a>




                <OrbitsScene
                    background={[
                       '/textures/right.png',
                       '/textures/left.png',
                       '/textures/top.png',
                       '/textures/bottom.png',
                       '/textures/front.png',
                       '/textures/back.png',
                    ]}
                >

                </OrbitsScene>
            </div>



        </OrbitsRenderer>}
    </>
    
    
    ;
}

// Helpers
function PassThrough({children}){ return children; }

function Combine({name, Renderer=PassThrough, Scene=PassThrough, Content=PassThrough, Camera=PassThrough}){
    return <>
        {[
            <Renderer key={name}>
                <Scene>
                    <Camera></Camera>
                    <Content></Content>
                </Scene> 
            </Renderer>]}
    </>;
}

function toRouter(object){
    const result = [];
    for(let path in object) result.push({path, element: object[path]});
    return result;
}

const defaults = (components) => Object.assign({
    Renderer: CommonRenderer,
    Camera:   CommonCamera,
    Scene:    CommonScene,
    Content:  CommonContent,
}, components);
