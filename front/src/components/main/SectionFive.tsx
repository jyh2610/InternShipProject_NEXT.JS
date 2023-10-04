"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Mousewheel, Navigation } from "swiper/modules";
import SectionSwiper from "./SectionSwiper";
import SectionProvider from "./SectionProvider";

// Swiper 라이브러리의 필수 모듈을 추가
function SectionFive() {
  return (
    <SectionProvider>
      <SectionSwiper />
    </SectionProvider>
  );
}

export default SectionFive;
