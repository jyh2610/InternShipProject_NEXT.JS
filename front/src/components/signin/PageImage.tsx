import { img } from "@/constants/constants";
import React from "react";

const PageImage = () => {
  return (
    <div>
      <img className="w-maxwidth h-screen" src={img} alt="이미지임시" />
    </div>
  );
};

export default PageImage;
