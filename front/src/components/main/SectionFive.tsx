"use client";
import React from "react";
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
