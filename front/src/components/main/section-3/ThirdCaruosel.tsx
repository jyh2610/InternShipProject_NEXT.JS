"use client";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import type { SwiperOptions } from "swiper/types";

// eslint-disable-next-line import/order
import { img } from "@/constants/constants";

import "./style.css";

interface IdxProps {
  idx: number;
  prevRef: any;
  nextRef: any;
}

function ThirdCarousel({ idx, prevRef, nextRef }: IdxProps) {
  const swiperObj: SwiperOptions = {
    loop: true,
    slidesPerView: 2.5,
    spaceBetween: 20,
    navigation: { prevEl: prevRef, nextEl: nextRef },
    modules: [Navigation],
    allowTouchMove: false,
    observer: true,
    observeParents: true,
  };

  const dummyImgData = [img, img, img, img, img, img, img, img];
  return (
    <>
      <div className="w-full">
        <Swiper {...swiperObj} className="mySwiper ">
          {dummyImgData.map((item, sliderIdx) => {
            return idx === sliderIdx % 4 ? (
              <SwiperSlide className="shadow-2xl" style={{ width: "70%" }}>
                <img className="w-full h-[100%]" src={item} alt="dummy" />
              </SwiperSlide>
            ) : (
              <SwiperSlide className="" style={{ width: "25%" }}>
                <img className="w-full h-[100%] " src={item} alt="dummy" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

export default ThirdCarousel;
