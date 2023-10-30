"use client";
import React from "react";

import { img } from "@/constants/constants";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";

function Slider() {
  const dummyImgData = [img, img, img, img];
  const swiperObj: SwiperOptions = {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    modules: [Navigation],
  };

  return (
    <Swiper navigation={true} {...swiperObj} className="mySwiper max-w-top">
      {dummyImgData.map((item, idx) => {
        return (
          <SwiperSlide key={idx} className="max-w-top">
            <img key={idx} src={item} alt="img" className="w-full h-[500px]" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Slider;
