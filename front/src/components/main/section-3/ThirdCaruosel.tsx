"use client";

import "swiper/css";
import "swiper/css/pagination";

import { dummyImg, dummyImgData, img, mainImg } from "@/constants/constants";
import { Pagination, Navigation, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SetStateAction } from "react";

interface IdxProps {
  idx: number;
  prevRef: any;
  nextRef: any;
}

function ThirdCarousel({ idx, prevRef, nextRef }: IdxProps) {
  return (
    <Swiper
      loop={true}
      slidesPerView={3}
      spaceBetween={20}
      navigation={{
        prevEl: prevRef?.current,
        nextEl: nextRef?.current,
      }}
      modules={[Navigation]}
      className="mySwiper w-[1200px] h-[400px]"
    >
      {dummyImgData.map((item, sliderIdx) => {
        console.log(idx, sliderIdx);

        return idx === sliderIdx % 4 ? (
          <SwiperSlide className="w-[300px]">
            <img className="w-[300px] h-full" src={item} alt="dummy" />
          </SwiperSlide>
        ) : (
          <SwiperSlide className="w-[200px]">
            <img className="w-[200px] h-full" src={item} alt="dummy" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default ThirdCarousel;
