import React from "react";

export function input(label, options, value, setter){
    if(options.checkbox) return <>{label}: <input type="checkbox" checked={value} onChange={e => setter(e.target.checked)}/></>;
    if(options.range)    return <>{label}: <input
        type="range"
        value={value}
        min={options.range[0]}
        max={options.range[1]}
        step={options.range[2]}
        onChange={e => setter(options.type === "float" ? parseFloat(e.target.value) : parseInt(e.target.value))}
    /></>;
    if(options.color)    return <>{label}: <input
        type="color"
        value={value}
        onChange={e => setter(e.target.value)}
    /></>;
}