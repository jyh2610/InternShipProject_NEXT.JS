import { dummyData } from "@/constants/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

function TextSlider({ idx, prevRef, nextRef }: { idx: number; prevRef: any; nextRef: any }) {
  return (
    <Swiper
      navigation={{
        prevEl: prevRef?.current,
        nextEl: nextRef?.current,
      }}
      loop={true}
      modules={[Navigation]}
      className="mySwiper w-1/5 bg-neutral-900"
    >
      {dummyData.map((_, index) => (
        <SwiperSlide key={index}>Slide{index + 1}</SwiperSlide>
      ))}
    </Swiper>
  );
}

export default TextSlider;
