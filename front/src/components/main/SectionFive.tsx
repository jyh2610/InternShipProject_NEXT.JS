"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Mousewheel, Navigation } from "swiper/modules";

// Swiper 라이브러리의 필수 모듈을 추가
function SectionFive() {
  const data = [
    {
      id: 1,
      img: "",
      title: "아키플2.0첫 번째 영역 타이틀",
      contentstext:
        "진행되는 순서에 대한 설명이 들어 갈 영역입니다<br />진행되는 순서에 대한 설명이 들어 갈 영역입니다<br />진행되는 순서에 대한 설명이 들어 갈 영역입니다.",
    },
    {
      id: 2,
      img: "",
      title: "아키플2.0첫 번째 영역 타이틀",
      contentstext:
        "진행되는 순서에 대한 설명이 들어 갈 영역입니다<br />진행되는 순서에 대한 설명이 들어 갈 영역입니다<br />진행되는 순서에 대한 설명이 들어 갈 영역입니다.",
    },
    {
      id: 3,
      img: "",
      title: "아키플2.0첫 번째 영역 타이틀",
      contentstext:
        "진행되는 순서에 대한 설명이 들어 갈 영역입니다<br />진행되는 순서에 대한 설명이 들어 갈 영역입니다<br />진행되는 순서에 대한 설명이 들어 갈 영역입니다.",
    },
  ];
  return (
    <div className="h-[500px]">
      {/* <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={70}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-vector/window-shadow-in-a-white-room_52683-66960.jpg?w=996&t=st=1695625635~exp=1695626235~hmac=85f81fa1a151806260b35316bec452e69aeba30c79a13fb2673543a4ca5e31a9"
            alt="이미지"
          />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper> */}
    </div>
  );
}

export default SectionFive;
