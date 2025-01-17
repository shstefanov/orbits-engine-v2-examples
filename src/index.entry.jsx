import React          from "react";
import { createRoot } from "react-dom/client";

import App from "./App.component";


const rootElement = document.querySelector("#root");
const rootNode = createRoot(rootElement);

rootNode.render(<App />);






// https://github.com/shstefanov/orbits-engine-v2-examples/blob/development/src/examples/objects/MeshLoaderExample.jsx
console.error("TODO: fix links to Github source");