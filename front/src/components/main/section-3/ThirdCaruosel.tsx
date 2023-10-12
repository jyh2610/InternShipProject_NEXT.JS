"use client";

import "swiper/css";
import "swiper/css/pagination";

import { dummyImg, dummyImgData, img, mainImg } from "@/constants/constants";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";
import { SwiperOptions } from "swiper/types";
import { useState } from "react";

interface IdxProps {
  idx: number;
  prevRef: any;
  nextRef: any;
}

function ThirdCarousel({ idx, prevRef, nextRef }: IdxProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const swiperObj: SwiperOptions = {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: { prevEl: prevRef?.current, nextEl: nextRef?.current },
    modules: [Navigation],
    allowTouchMove: false,
  };

  return (
    <>
      <div className="w-[600px]">
        <Swiper {...swiperObj} thumbs={{ swiper: thumbsSwiper }} className="mySwiper ">
          {dummyImgData.map((item, sliderIdx) => {
            return idx === sliderIdx % 4 ? (
              <SwiperSlide style={{ width: "400px", height: "500px" }}>
                <img className="w-[400px] h-[500px]" src={item} alt="dummy" />
              </SwiperSlide>
            ) : (
              <SwiperSlide style={{ width: "100px", height: "500px" }}>
                <img className="w-[100px] h-[500px]" src={item} alt="dummy" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

export default ThirdCarousel;
