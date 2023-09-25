"use client";

import Image from "next/image";
import { dummyImg } from "@/constants/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef, useState } from "react";

function TwoCarousel() {
  const ref = useRef(null);
  const [imgIdx, setImgIdx] = useState(0);
  const dummyData = [1, 2, 3, 4];
  const handleSlideChange = (swiper: { realIndex: any }) => {
    // setImgIdx(idx);
    setImgIdx(swiper.realIndex);
  };
  console.log(imgIdx);

  return (
    <>
      <Swiper
        className="mySwiper w-3/5"
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        modules={[Navigation, Pagination]}
        onSlideChange={handleSlideChange}
      >
        {dummyData.map((_, idx) => (
          <SwiperSlide key={idx}>
            <Image src={dummyImg} alt={"dummy"} width={300} height={300} layout="responsive" />
          </SwiperSlide>
        ))}
      </Swiper>
      <span>
        {imgIdx + 1} / {dummyData.length}
      </span>
    </>
  );
}

export default TwoCarousel;
