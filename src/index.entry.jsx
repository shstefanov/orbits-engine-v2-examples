import React          from "react";
import { createRoot } from "react-dom/client";

import App from "./App.component";


const rootElement = document.querySelector("#root");
const rootNode = createRoot(rootElement);

rootNode.render(<App />);
