"use client";

import Image from "next/image";
import { dummyImg } from "@/constants/constants";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function TwoCaruosel() {
  const dummyData = [1, 2, 3, 4];

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {dummyData.map((_, idx) => {
        return (
          <SwiperSlide key={idx}>
            <Image src={dummyImg} alt={"dummy"} width={600} height={400} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default TwoCaruosel;
