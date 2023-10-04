"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../components/style.css";

import { PlayCircleFilled } from "@ant-design/icons";
import { Autoplay, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { useAppSelector } from "@/redux/hooks";
import useSectionTop from "@/hooks/useSectionTop";
function SectionSwiper() {
  const data = [
    {
      id: 1,

      img: "https://img.freepik.com/free-photo/empty-chair-in-restaurant_1339-5436.jpg?w=1380&t=st=1695710152~exp=1695710752~hmac=35aaec832880968cd682127a61258c48be0f6b22e944413c35a3150cacdaaeeb",
      title: "아키플2.0<br />첫 번째 영역 타이틀",
      contentstext:
        "1111진행되는 순서에 대한 설명이 들어 갈 영역입니다<br />진행되는 순서에 대한 설명이 들어 갈 영역입니다<br />진행되는 순서에 대한 설명이 들어 갈 영역입니다.",
    },
    {
      id: 2,

      img: "https://img.freepik.com/free-photo/cafe-and-living-room-loft-style_1150-10726.jpg?w=1380&t=st=1695702593~exp=1695703193~hmac=4a3993d7475357eb141d203d44aaffc5695b8d6ea854a6e80d45b2d95bc2f598",
      title: "아키플2.0<br />첫 번째 영역 타이틀",
      contentstext:
        "2222진행되는 순서에 대한 설명이 들어 갈 영역입니다<br />진행되는 순서에 대한 설명이 들어 갈 영역입니다<br />진행되는 순서에 대한 설명이 들어 갈 영역입니다.",
    },
    {
      id: 3,

      img: "https://img.freepik.com/free-psd/realistic-modern-bright-dining-room-with-wooden-table-and-chairs_176382-497.jpg?w=826&t=st=1695710195~exp=1695710795~hmac=8cc90441069c4f29ec5c5784d2c09d910dbb743b668e6fd9faf7e8074270f70f",
      title: "아키플2.0<br />첫 번째 영역 타이틀",
      contentstext:
        "3333진행되는 순서에 대한 설명이 들어 갈 영역입니다<br />진행되는 순서에 대한 설명이 들어 갈 영역입니다<br />진행되는 순서에 대한 설명이 들어 갈 영역입니다.",
    },
  ];
  const scrollHeight = useAppSelector((state) => state.scrollStopper.navBottom);
  const scrollTopHeight = useAppSelector((state) => state.scrollStopper.sectionTop);
  console.log(scrollTopHeight, "dd");
  const isContact = scrollHeight - scrollTopHeight > 0;
  console.log(isContact, " 접하니");
  const sectionTopRef = useSectionTop();
  const [activeIndex, setActiveIndex] = useState(0); // 상태 변수로 현재 인덱스를 관리합니다.
  // 스와이퍼 슬라이드가 변경될 때 호출되는 콜백 함수
  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex); // activeIndex를 상태에 업데이트합니다.
  };
  console.log(activeIndex !== data.length - 1);
  const isFinal = activeIndex !== data.length - 1;

  return (
    <div ref={sectionTopRef}>
      <Swiper
        mousewheel={isFinal ? true : false}
        direction={"vertical"}
        slidesPerView={1}
        autoHeight={true}
        modules={[Mousewheel, Pagination, Navigation]}
        onSlideChange={handleSlideChange}
        className=" mySwiper py-[300px]"
      >
        {data.map((slidecontent, idx) => (
          <SwiperSlide className="" key={idx}>
            <div style={{ backgroundImage: `url(${slidecontent.img})`, width: "100%", height: "960px" }}>
              <div className="flex justify-around text-[#fff] pt-48">
                <div className="text-5xl font-bold">0{slidecontent.id}</div>
                <div>
                  <div className="text-5xl font-bold leading-tight" dangerouslySetInnerHTML={{ __html: slidecontent.title }} />
                  <div className="mt-[97%]" dangerouslySetInnerHTML={{ __html: slidecontent.contentstext }} />
                </div>
              </div>
              <div className="absolute left-[50%] top-[50%] text-6xl text-[#fff] cursor-pointer opacity-80">
                <PlayCircleFilled />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SectionSwiper;
