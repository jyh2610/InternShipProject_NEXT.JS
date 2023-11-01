"use client";

import type { SetStateAction } from "react";
import { useState } from "react";

import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { sumZero } from "@/lib/sumZero";

import SliderText from "./SliderText";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./layout.css";

function TwoCarousel() {
  const [imgIdx, setImgIdx] = useState(0);
  const dummyData = [1, 2, 3, 4];

  const handleSlideChange = (swiper: { realIndex: SetStateAction<number> }) => {
    setImgIdx(swiper.realIndex);
  };

  return (
    <div className="w-full">
      <div className="relative m_slide_wrap flex gap-[0.5rem] w-full">
        <div className="shadow-2xl slide_layout">
          <Swiper
            navigation={{
              nextEl: ".swiper-button-next", // Specify next button element
            }}
            loop={true}
            modules={[Navigation, A11y]}
            onSlideChange={handleSlideChange}
          >
            {dummyData.map((_, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative bg-dummyImg bg-center bg-no-repeat bg-cover h-[30rem] lg:h-[40rem] object-cover">
                  <SliderText />
                  <div className="Dimmed"></div>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-button-next" />
          </Swiper>
        </div>
        <div className="items-end hidden md:flex">
          <div className="flex items-baseline" style={{ gap: "0.2rem", justifyContent: "center" }}>
            <div className="active_num" style={{ fontSize: "1.8rem", fontWeight: "700", lineHeight: "0" }}>
              {sumZero(imgIdx + 1)}
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="22" viewBox="0 0 9.905 25.609">
                <line id="선_47" data-name="선 47" x1="8" y2="25" transform="translate(0.952 0.305)" fill="none" stroke="#000" strokeWidth="2" />
              </svg>
            </div>
            <div className="count_num" style={{ fontSize: "1.2rem", fontWeight: "300", lineHeight: "0" }}>
              {sumZero(dummyData.length)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TwoCarousel;
