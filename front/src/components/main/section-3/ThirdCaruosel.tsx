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
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: { prevEl: prevRef?.current, nextEl: nextRef?.current },
    modules: [Navigation],
    allowTouchMove: false,
  };

  return (
    <>
      <Swiper {...swiperObj} thumbs={{ swiper: thumbsSwiper }} className="mySwiper ">
        {dummyImgData.map((item, sliderIdx) => {
          return idx === sliderIdx % 4 ? (
            <SwiperSlide>
              <img className="aspect-w-16 aspect-h-9 object-contain w-full h-full" src={item} alt="dummy" />
            </SwiperSlide>
          ) : (
            <SwiperSlide>
              <img className=" aspect-w-16 aspect-h-9 object-contain w-full h-full" src={item} alt="dummy" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default ThirdCarousel;
