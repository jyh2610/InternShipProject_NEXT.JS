"use client";

import React from "react";

import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import FadeProvider from "@/components/FadeProvider";
import { M_slideData } from "@/constants/constants";

const MobileSlice = () => {
  // const [imgIdx, setImgIdx] = useState(0);

  // const handleSlideChange = (swiper: { realIndex: SetStateAction<number> }) => {
  //   setImgIdx(swiper.realIndex);
  // };
  return (
    <div>
      <FadeProvider>
        <div className=" flex justify-center relative">
          <Swiper style={{ margin: "0" }} className=" w-full" navigation={true} loop={true} modules={[Navigation, A11y]}>
            {M_slideData.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item.img} alt="이미지" className="w-full" />
                <div className="text-[#fff]">
                  <p className="">0{item.id + 1}</p>
                  <div className="">
                    <p className="text-[1.5rem] mb-[2rem]" dangerouslySetInnerHTML={{ __html: item.title }} />
                    <p dangerouslySetInnerHTML={{ __html: item.contentstext }} className=" text-[0.9rem]" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </FadeProvider>
    </div>
  );
};

export default MobileSlice;
