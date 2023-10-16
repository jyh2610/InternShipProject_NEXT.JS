import React from "react";

import { data } from "@/constants/constants";

const HoverImage = () => {
  return (
    <div className="flex">
      {data.map((item, idx) => (
        <div key={idx} className="relative text-[#fff] w-1/4 h-[56.25rem] overflow-hidden transition-all duration-300 group hover:font-bold hover:w-[100vw]">
          <img src={item.img} alt="이미지" />
          <div>
            <p className=" absolute top-[5rem] ml-[10.25rem] text-[4rem] font-bold stroke-[#fff] text-stroke">0{item.id + 1}</p>
            <div className="absolute ml-[10.25rem] bottom-[5rem] opacity-0 hover:opacity-100 inset-0 flex flex-col justify-end transition-opacity duration-300 ">
              <p className="text-[2.25rem] mb-[2rem]" dangerouslySetInnerHTML={{ __html: item.title }} />
              <p dangerouslySetInnerHTML={{ __html: item.contentstext }} className=" text-[1.25rem] font-medium" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HoverImage;
