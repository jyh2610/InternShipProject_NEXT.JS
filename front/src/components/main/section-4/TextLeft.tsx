import React from "react";

import { animationtext1 } from "@/constants/constants";

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
