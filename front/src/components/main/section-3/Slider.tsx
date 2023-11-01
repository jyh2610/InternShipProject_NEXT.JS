"use client";
import React from "react";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { thirdSlideData } from "@/constants/constants";

import type { SwiperOptions } from "swiper/types";

import "./style.css";

function Slider() {
  const swiperObj: SwiperOptions = {
    loop: true,
    slidesPerView: 1,
    modules: [Navigation],
  };

  return (
    <Swiper navigation={true} {...swiperObj} className="mySwiper mainwidth ">
      {thirdSlideData.map((item, idx) => {
        const { img, title, contentstext } = item;
        return (
          <SwiperSlide key={idx}>
            <div
              key={idx}
              className=" w-full h-[580px]"
              style={{ backgroundImage: `url(${img})`, backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover" }}
            >
              <div className="three-slide-text">
                <p className="three-slide-tit" dangerouslySetInnerHTML={{ __html: title }}></p>
                <p className="three-slide-contant" dangerouslySetInnerHTML={{ __html: contentstext }}></p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Slider;
