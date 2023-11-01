"use client";

import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import FadeProvider from "@/components/FadeProvider";
import { M_slideData } from "@/constants/constants";

const MobileSlice = () => {
  return (
    <div>
      <FadeProvider>
        <div className="slide">
          <Swiper style={{ margin: "0" }} className="w-full" navigation={true} loop={true} modules={[Navigation, A11y]}>
            {M_slideData.map((item, index) => (
              <SwiperSlide className="relative" key={index}>
                <img className="w-full" src={item.img} alt="이미지" />
                <div className="m_slide_text_box text-[#fff]">
                  <p className="text-[1rem] pb-[0.2rem]">0{item.id + 1}</p>
                  <p className="text-[1.4rem] font-bold pb-[1rem]" dangerouslySetInnerHTML={{ __html: item.title }} />
                  <p dangerouslySetInnerHTML={{ __html: item.contentstext }} className=" text-[1.125rem]" />
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
