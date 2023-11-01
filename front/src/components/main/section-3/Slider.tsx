"use client";
import React from "react";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { thirdSlideData } from "@/constants/constants";

import type { SwiperOptions } from "swiper/types";

function Slider() {
  const swiperObj: SwiperOptions = {
    loop: true,
    slidesPerView: 1,
    modules: [Navigation],
  };

  return (
    <Swiper navigation={true} {...swiperObj} className="mySwiper max-w-top">
      {thirdSlideData.map((item, idx) => {
        const { img, title, contentstext } = item;
        return (
          <SwiperSlide key={idx} className="max-w-top">
            <div
              key={idx}
              className=" w-full h-[680px]"
              style={{ backgroundImage: `url(${img})`, backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover" }}
            >
              <div className="three-slide-text">
                <p dangerouslySetInnerHTML={{ __html: title }}></p>
                <p dangerouslySetInnerHTML={{ __html: contentstext }}></p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Slider;
