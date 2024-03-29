import React from "react";

import { animationtext2 } from "@/constants/constants";
const TextRight = () => {
  return (
    <div className="flow-text">
      {animationtext2.map((text, idx) => (
        <div key={idx} className="flow-wrap-right">
          {text.text}
        </div>
      ))}
    </div>
  );
};

export default TextRight;
