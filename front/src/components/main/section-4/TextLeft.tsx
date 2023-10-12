import { animationtext1 } from "@/constants/constants";
import React from "react";

const TextLeft = () => {
  return (
    <div className="flow-text">
      {animationtext1.map((text, idx) => (
        <div key={idx} className="flow-wrap flow-wrap-left">
          {text.text}
        </div>
      ))}
    </div>
  );
};

export default TextLeft;
