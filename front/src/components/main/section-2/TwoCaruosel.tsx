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
  const handleSlideChange = (swiper: { realIndex: number }) => {
    setImgIdx(swiper.realIndex);
  };

  return (
    <div className="flex justify-start">
      <Swiper className="mySwiper w-4/5" navigation={true} loop={true} modules={[Navigation, Pagination]} onSlideChange={handleSlideChange}>
        {dummyData.map((_, idx) => (
          <SwiperSlide key={idx}>
            <Image src={dummyImg} alt={"dummy"} width={1200} height={600} layout="responsive" />
          </SwiperSlide>
        ))}
      </Swiper>
      <span className="mt-auto mb-0">
        {imgIdx + 1} / {dummyData.length}
      </span>
    </div>
  );
}

export default TwoCarousel;
