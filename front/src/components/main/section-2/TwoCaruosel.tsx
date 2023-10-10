"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { A11y, Navigation } from "swiper/modules";
import { SetStateAction, useState } from "react";
import SliderText from "./SliderText";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function TwoCarousel() {
  const [imgIdx, setImgIdx] = useState(0);
  const dummyData = [1, 2, 3, 4];

  const handleSlideChange = (swiper: { realIndex: SetStateAction<number> }) => {
    setImgIdx(swiper.realIndex);
  };

  return (
    <div className=" flex justify-start w-screen h-[50rem] ">
      <Swiper style={{ margin: "0" }} className=" w-10/12" navigation={true} loop={true} modules={[Navigation, A11y]} onSlideChange={handleSlideChange}>
        {dummyData.map((_, idx) => (
          <SwiperSlide className="aspect-w-16 aspect-h-9" key={idx}>
            <div className="bg-dummyImg w-full h-full bg-cover object-cover flex items-end">
              <SliderText />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex items-end ml-8">
        <span className="text-4xl">{imgIdx + 1} </span>
        <span>/</span>
        <span className="text-2xl"> {dummyData.length}</span>
      </div>
    </div>
  );
}

export default TwoCarousel;
