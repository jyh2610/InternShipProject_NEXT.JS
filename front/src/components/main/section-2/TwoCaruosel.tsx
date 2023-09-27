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

  // Custom CSS styles to align slides to the left
  const swiperStyles = {
    display: "flex",
    justifyContent: "flex-start",
  };

  return (
    <div className="flex justify-start">
      <Swiper
        className="mySwiper w-2/3"
        navigation={true}
        loop={true}
        modules={[Navigation, Pagination]}
        onSlideChange={handleSlideChange}
        style={swiperStyles} // Apply the custom styles here
      >
        {dummyData.map((_, idx) => (
          <SwiperSlide key={idx}>
            <Image className="aspect-video" src={dummyImg} alt={"dummy"} width={1200} height={500} layout="responsive" />
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
