import { data } from "@/constants/constants";
import React from "react";

const HoverImage = () => {
  return (
    <div className="flex">
      {data.map((item, idx) => (
        <div key={idx} className="relative text-[#fff] w-1/4 h-[56.25rem] overflow-hidden transition-all duration-300 group hover:w-[100vw]">
          <img src={item.img} alt="이미지" />
          <p className=" absolute top-0 ml-[10.25rem] text-[4rem]">0{item.id + 1}</p>
          <div className="absolute ml-[10.25rem] bottom-0 opacity-0 hover:opacity-100 inset-0 flex flex-col justify-end transition-opacity duration-300 ">
            <p className="text-[2.25rem]" dangerouslySetInnerHTML={{ __html: item.title }} />
            <p dangerouslySetInnerHTML={{ __html: item.contentstext }} className="font-bold text-[1.25rem]" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HoverImage;
