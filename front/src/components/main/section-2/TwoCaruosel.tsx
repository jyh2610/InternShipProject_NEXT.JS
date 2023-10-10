"use client";

import { dummyImg, img } from "@/constants/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation } from "swiper/modules";
import { useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef, useState } from "react";
import SlideNextBtn from "./SlideNextBtn";
import SliderText from "./\bSliderText";

function TwoCarousel() {
  const [imgIdx, setImgIdx] = useState(0);
  const dummyData = [1, 2, 3, 4];
  const handleSlideChange = (swiper: { realIndex: number }) => {
    setImgIdx(swiper.realIndex);
  };
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiper = useSwiper();

  return (
    <div className=" flex justify-start h-4/5">
      <Swiper
        navigation={{
          nextEl: nextRef?.current,
          prevEl: prevRef?.current,
        }}
        style={{ margin: "0" }}
        className="mx-0 w-10/12"
        loop={true}
        modules={[Navigation, A11y]}
        onSlideChange={handleSlideChange}
      >
        {dummyData.map((_, idx) => (
          <SwiperSlide className="w-full h-2/3" key={idx}>
            <div className="w-full h-full bg-cover flex justify-end items-center" style={{ backgroundImage: `url(${dummyImg})` }}>
              <SliderText />
              <SlideNextBtn nextRef={nextRef} />
            </div>
          </SwiperSlide>
        ))}
        <SlideNextBtn nextRef={nextRef} />
      </Swiper>

      {/* prev 버튼이 없으면 작동 안 함 해결 필 */}
      <button className="hidden" ref={prevRef} />
      <div className="flex items-end">
        <span className="text-4xl">{imgIdx + 1} </span>/<span className="text-2xl"> {dummyData.length}</span>
      </div>
    </div>
  );
}

export default TwoCarousel;
