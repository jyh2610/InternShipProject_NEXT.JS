import React from "react";

import Image from "next/image";
import { mainImg } from "@/constants/constants";

const PageImage = () => {
  return (
    <div className="w-[100%] h-[100vh] relative">
      <Image src={mainImg} style={{ zIndex: 1, display: "hidden" }} alt="슬라이드 이미지" fill />
    </div>
  );
};

export default PageImage;
