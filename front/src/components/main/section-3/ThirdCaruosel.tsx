"use client";

import "swiper/css";
import "swiper/css/pagination";

import { dummyData, mainImg } from "@/constants/constants";
import { Pagination, Navigation, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SetStateAction } from "react";

interface IdxProps {
  idx: number;
  setIdx: (value: SetStateAction<number>) => void;
  prevRef: any;
  nextRef: any;
}

function ThirdCarousel({ idx, setIdx, prevRef, nextRef }: IdxProps) {
  const handleSlideChange = (swiper: { realIndex: SetStateAction<number> }) => {
    setIdx(swiper.realIndex);
  };

  return (
    <Swiper
      onSlideChange={handleSlideChange}
      loop={true}
      slidesPerView={2}
      spaceBetween={0}
      navigation={{
        prevEl: prevRef?.current,
        nextEl: nextRef?.current,
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper w-2/3"
    >
      {dummyData.map((_, sliderIdx) => (
        <SwiperSlide className="w-[300px]" key={sliderIdx}>
          {idx === sliderIdx ? <img className="w-[300px]" src={mainImg} alt="dummy" /> : <img className="w-[250px]" src={mainImg} alt="dummy" />}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ThirdCarousel;
