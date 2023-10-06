"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../../components/style.css";
import { PlayCircleFilled } from "@ant-design/icons";
import { Autoplay, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { useAppSelector } from "@/redux/hooks";
import useSectionTop from "@/hooks/useSectionTop";
import { data } from "./SwiperData";

function SectionSwiper() {
  const scrollHeight = useAppSelector((state) => state.scrollStopper.navBottom);
  const scrollTopHeight = useAppSelector((state) => state.scrollStopper.sectionTop);
  console.log(scrollTopHeight, "스크롤 섹션탑 헤이트");
  console.log(scrollHeight, "스크롤 헤이트");
  const isContact = scrollHeight - scrollTopHeight > 0;
  console.log(isContact, " 접하니");
  const sectionTopRef = useSectionTop();
  // 현재인덱스 관리
  const [activeIndex, setActiveIndex] = useState(0);

  // 스와이퍼 슬라이드가 변경될 때 호출되는 콜백 함수
  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex); // activeIndex를 상태에 업데이트합니다.
  };
  console.log(activeIndex !== data.length - 1);
  const isFinal = activeIndex !== data.length - 1;

  return (
    <div ref={sectionTopRef}>
      <Swiper
        mousewheel={activeIndex !== data.length - 1}
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
