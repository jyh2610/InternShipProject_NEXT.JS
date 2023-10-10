import React from "react";
import "./style.css";

function ScrollDown() {
  return (
    <div className="scroll_ani"
    style={{
      position: "absolute",
      left: "50%",
      bottom: "10%",
      transform: "translateX(-50%)",
    }}>
        <div className="container">
        <div className="chevron"></div>
        <div className="chevron"></div>
        <div className="chevron"></div>
        <span className="text">Scroll down</span>
      </div>
    </div>
  );
}

export default ScrollDown;
