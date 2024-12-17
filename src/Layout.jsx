import React from "react";



export default function Layout(props){
    return <div className="layout">
        <div className="navigation" >{ props.navigation }</div>
        <div className="content"    >{ props.children   }</div>
    </div>;
}