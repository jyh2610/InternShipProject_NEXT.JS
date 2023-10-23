"use client";

import type { SetStateAction } from "react";
import React, { useState } from "react";

import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { data } from "@/constants/constants";

const MobileSlice = () => {
  const [imgIdx, setImgIdx] = useState(0);

  const handleSlideChange = (swiper: { realIndex: SetStateAction<number> }) => {
    setImgIdx(swiper.realIndex);
  };
  return (
    <div className=" flex justify-center h-[40rem]">
      <Swiper style={{ margin: "0" }} className=" w-10/12" navigation={true} loop={true} modules={[Navigation, A11y]} onSlideChange={handleSlideChange}>
        {data.map((item, idx) => (
          <SwiperSlide className="aspect-w-16 aspect-h-9" key={idx}>
            <img src={item.img} alt="이미지" />
            <div className="text-[#fff]">
              <p className=" absolute top-[7rem] ml-[3rem] text-[3.75rem] font-bold">0{item.id + 1}</p>
              <div className="absolute ml-[3rem] bottom-[23rem] inset-0 flex flex-col justify-end transition-opacity">
                <p className="text-[1.5rem] mb-[2rem]" dangerouslySetInnerHTML={{ __html: item.title }} />
                <p dangerouslySetInnerHTML={{ __html: item.contentstext }} className="text-[0.9rem]" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MobileSlice;
