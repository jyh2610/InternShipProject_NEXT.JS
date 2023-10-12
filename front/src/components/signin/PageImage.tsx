import { img, mainImg } from "@/constants/constants";
import React from "react";

const PageImage = () => {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <img src={mainImg} className="w-[100vw] h-[100vh]" alt="이미지임시" />
    </div>
  );
};

export default PageImage;
