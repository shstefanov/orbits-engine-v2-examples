import React from "react";
import { AmbientLight } from "@orbits/engine";

export default function CommonContent({children}){
    // add some objects and light here
    return <>
        <AmbientLight intensity={100} />
    </>;
}