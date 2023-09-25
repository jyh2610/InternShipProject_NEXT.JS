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
    // setImgIdx(idx);
    setImgIdx(swiper.realIndex);
  };

  return (
    <>
      <div className="w-4/5 flex justify-start">
        <Swiper
          className="mySwiper "
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
              <Image src={dummyImg} alt={"dummy"} width={1800} height={600} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <span>
        {imgIdx + 1} / {dummyData.length}
      </span>
    </>
  );
}

export default TwoCarousel;
