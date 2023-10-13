"use client";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { img } from "@/constants/constants";

import "./style.css";
import type { SwiperOptions } from "swiper/types";

interface IdxProps {
  idx: number;
  prevRef: any;
  nextRef: any;
}

function ThirdCarousel({ idx, prevRef, nextRef }: IdxProps) {
  const swiperObj: SwiperOptions = {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: { prevEl: prevRef?.current, nextEl: nextRef?.current },
    modules: [Navigation],
    allowTouchMove: false,
  };
  const dummyImgData = [img, img, img, img, img, img, img, img];
  return (
    <>
      <div className="w-2/3">
        <Swiper {...swiperObj} className="mySwiper ">
          {dummyImgData.map((item, sliderIdx) => {
            return idx === sliderIdx % 4 ? (
              <SwiperSlide className="aspect-w-16 aspect-h-9" style={{ width: "70%" }}>
                <img className="w-full h-[500px]" src={item} alt="dummy" />
              </SwiperSlide>
            ) : (
              <SwiperSlide className="aspect-w-16 aspect-h-9" style={{ width: "25%" }}>
                <img className="w-full h-[500px] " src={item} alt="dummy" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

export default ThirdCarousel;
