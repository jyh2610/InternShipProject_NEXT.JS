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
    <div className="flex justify-start w-2/3 h-80">
      <Swiper className="mySwiper" navigation={true} loop={true} modules={[Navigation, Pagination]} onSlideChange={handleSlideChange}>
        {dummyData.map((_, idx) => (
          <SwiperSlide key={idx}>
            {/* <Image className="aspect-video" src={dummyImg} alt={"dummy"} width={1200} height={500} layout="responsive" /> */}
            <div className="border-2 border-indigo-500 bg-blue-700 h-1/3">1</div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-auto mb-0 flex">
        <span className="text-4xl">{imgIdx + 1} </span>/<span className="text-2xl"> {dummyData.length}</span>
      </div>
    </div>
  );
}

export default TwoCarousel;
