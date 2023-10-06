"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Mousewheel, Navigation } from "swiper/modules";
import SectionSwiper from "./section-5/SectionSwiper";
import SectionProvider from "./SectionProvider";
import SectionSwiperGsap from "./section-5/SectionSwiperGsap";
import { data } from "./section-5/SwiperData";
import "../../components/main/section-5/style.css";
// Swiper 라이브러리의 필수 모듈을 추가
function SectionFive() {
  return (
    <main id="parallax__cont">
      {data.map((slidecontent, idx) => (
        <SectionSwiperGsap id={idx} imageSrc={slidecontent.img} title={slidecontent.title} />
      ))}
    </main>
  );
}

export default SectionFive;
