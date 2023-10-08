"use client";

import Image from "next/image";
import { dummyImg, img } from "@/constants/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef, useState } from "react";

function TwoCarousel() {
  const [imgIdx, setImgIdx] = useState(0);
  const dummyData = [1, 2, 3, 4];
  const handleSlideChange = (swiper: { realIndex: number }) => {
    setImgIdx(swiper.realIndex);
  };
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const handlePrevClick = () => {
    const swiper = useSwiper();
    swiper?.slidePrev();
  };

  const handleNextClick = () => {
    const swiper = useSwiper();
    swiper?.slideNext();
  };

  return (
    <div className=" flex justify-start h-2/5">
      <Swiper
        navigation={{
          nextEl: nextRef?.current,
          prevEl: prevRef?.current,
        }}
        style={{ margin: "0" }}
        className="mx-0 w-10/12"
        loop={true}
        modules={[Navigation, Pagination]}
        onSlideChange={handleSlideChange}
      >
        {dummyData.map((_, idx) => (
          <SwiperSlide className="w-full" key={idx}>
            <div className="w-full h-full bg-cover" style={{ backgroundImage: `url(${dummyImg})` }} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button ref={prevRef} onClick={handlePrevClick}>
        prev
      </button>
      <button ref={nextRef} onClick={handleNextClick}>
        next
      </button>

      <div className="flex items-end">
        <span className="text-4xl">{imgIdx + 1} </span>/<span className="text-2xl"> {dummyData.length}</span>
      </div>
    </div>
  );
}

export default TwoCarousel;
