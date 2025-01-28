import React, { useEffect, useState, useRef } from "react";

const minSize = 30;
const initialSize = parseInt(localStorage._objectEditorSize = localStorage._objectEditorSize || "250");

export default function ResizableSidebar({children, onChangeSize}){

    const [ size, setSize ] = useState(initialSize);
    const sizeRef = useRef();
    if(!sizeRef.current) sizeRef.current = size;

    function setStoredSize(size){
        localStorage._objectEditorSize = size;
        setSize(size);
        sizeRef.current = size;
        onChangeSize(size);
    }

    useEffect(() => {
        let resizelistener;
        window.addEventListener("resize", resizelistener = e => {
            onChangeSize(sizeRef.current);
        });
        onChangeSize(sizeRef.current);
        return () => window.removeEventListener("resize", resizelistener);
    }, []);

    return <>
        <div className="separator" onMouseDown={handleResize(size, setStoredSize)} onDragStart={e => e.preventDefault()}></div>
        <div className="sidebar" style={{flexBasis: `${size}px`, maxWidth: `${size}px`}}>
            {children}
        </div>
    </>
}

function handleResize(size, setSize){
    return function(event){
        const { pageX } = event;

        const maxSize = window.innerWidth / 2;

        let movelistener, mouseuplistener;
        window.addEventListener("mousemove", movelistener = e => {
            const newSize = size + e.pageX - pageX;
            setSize(Math.min(maxSize, Math.max(minSize, newSize)));
        });
        window.addEventListener("mouseup", mouseuplistener = e => {
            window.removeEventListener("mousemove", movelistener);
            window.removeEventListener("mouseleave", mouseuplistener);
            window.removeEventListener("mouseup", mouseuplistener);
        });
        window.removeEventListener("mouseleave", mouseuplistener);

    }
}