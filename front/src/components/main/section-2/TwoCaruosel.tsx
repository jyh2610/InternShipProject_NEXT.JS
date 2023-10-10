"use client";
import { dummyImg } from "@/constants/constants";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { A11y, Navigation } from "swiper/modules";
import { SetStateAction, useRef, useState } from "react";
import SlideNextBtn from "./SlideNextBtn";
import SliderText from "./SliderText";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function TwoCarousel() {
  const [imgIdx, setImgIdx] = useState(0);
  const dummyData = [1, 2, 3, 4];
  const handleSlideChange = (swiper: { realIndex: SetStateAction<number> }) => {
    setImgIdx(swiper.realIndex);
  };
  const swiper = useSwiper();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const slideNext = () => {
    swiper?.slideNext();
  };
  return (
    <div className=" flex justify-start h-4/5">
      <Swiper style={{ margin: "0" }} className=" w-10/12" navigation={true} loop={true} modules={[Navigation, A11y]} onSlideChange={handleSlideChange}>
        {dummyData.map((_, idx) => (
          <SwiperSlide className="w-full h-2/3 relative" key={idx}>
            <div className="bg-dummyImg w-full h-full bg-cover flex items-center">
              <SliderText />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* prev 버튼이 없으면 작동 안 함 해결 필요*/}
      <button className="hidden" ref={prevRef} />
      <div className="flex items-end">
        <span className="text-4xl">{imgIdx + 1} </span>/<span className="text-2xl"> {dummyData.length}</span>
      </div>
    </div>
  );
}

export default TwoCarousel;
