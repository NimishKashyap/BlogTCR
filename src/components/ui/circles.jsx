import React from "react";
import "./circles.css";
function Circles(props) {
    return <div className={`circles-${props.className}`}></div>;
}

export default Circles;
