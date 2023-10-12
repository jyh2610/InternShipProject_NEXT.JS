import { img, mainImg } from "@/constants/constants";
import React from "react";

const PageImage = () => {
  return (
    <div>
      <img className="w-screen h-screen" src={mainImg} alt="이미지임시" />
    </div>
  );
};

export default PageImage;
