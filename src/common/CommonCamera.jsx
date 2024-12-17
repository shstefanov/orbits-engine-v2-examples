import React from "react";

import { PerspectiveCamera } from "@orbits/engine";

export default function CommonCamera({children}){
    // add some objects and light here
    return <PerspectiveCamera
        // props here
    >
        { children }
    </PerspectiveCamera>;
}