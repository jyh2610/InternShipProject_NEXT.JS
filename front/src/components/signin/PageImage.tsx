import React from "react";

import { mainImg } from "@/constants/constants";
import Image from "next/image";

const PageImage = () => {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <Image src={mainImg} className="w-[100vw] h-[100vh]" alt="이미지임시" />
    </div>
  );
};

export default PageImage;
