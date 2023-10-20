import type { SetStateAction } from "react";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { dummyData } from "@/constants/constants";

import "swiper/css";

function TextSlider({ setIdx, prevRef, nextRef }: { setIdx: (value: SetStateAction<number>) => void; idx: number; prevRef: any; nextRef: any }) {
  const handleSlideChange = (swiper: { realIndex: SetStateAction<number> }) => {
    setIdx(swiper.realIndex);
  };
  return (
    <Swiper
      onSlideChange={handleSlideChange}
      navigation={{ prevEl: prevRef, nextEl: nextRef }}
      loop={true}
      modules={[Navigation]}
      allowTouchMove={false}
      className="mySwiper w-96"
    >
      {dummyData.map((_, index) => (
        <SwiperSlide key={index}>
          <div className="text-lg">
            Slide{index + 1}
            <div>슬라이더 이미지, 영상 관련 설명의 타이틀</div>
            <div>
              이미지 또는 영상 대한 텍스트, 이미지 또는 영상 대한 텍스트, 이미지 또는 영상 대한 텍스트,이미지 또는 영상 대한 텍스트, 이미지 또는 영상 대한
              텍스트, 이미지 또는 영상 대한 텍스트,
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default TextSlider;
