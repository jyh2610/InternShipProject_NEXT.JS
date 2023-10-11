import { data } from "@/constants/constants";
import React from "react";

const HoverImage = () => {
  return (
    <div className="flex">
      {data.map((item, idx) => (
        <div key={idx} className="relative w-1/4 h-[56.25rem] overflow-hidden transition-all duration-300 group hover:w-[100vw]">
          <img src={item.img} alt="이미지" />{" "}
          <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ">
            <p className="text-[4rem] text-[#fff] ">0{item.id + 1}</p>
            <p className="opacity-0 hover:opacity-100 text-gray-700 font-semibold">{item.contentstext}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HoverImage;
