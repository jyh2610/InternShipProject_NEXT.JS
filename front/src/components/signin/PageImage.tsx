import React from "react";

import { mainImg } from "@/constants/constants";

const PageImage = () => {
  return (
    <div className="w-[100%] h-[100vh]">
      <img src={mainImg} className="w-[100%] h-[100%]" alt="이미지임시" />
    </div>
  );
};

export default PageImage;
