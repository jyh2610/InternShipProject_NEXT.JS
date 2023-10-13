"use client";
import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SetStateAction, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { data } from "@/constants/constants";
data;
const MobileSlice = () => {
  const [imgIdx, setImgIdx] = useState(0);

  const handleSlideChange = (swiper: { realIndex: SetStateAction<number> }) => {
    setImgIdx(swiper.realIndex);
  };
  return (
    <div>
      {" "}
      <div className=" flex justify-start h-[50rem] ">
        <Swiper style={{ margin: "0" }} className=" w-10/12" navigation={true} loop={true} modules={[Navigation, A11y]} onSlideChange={handleSlideChange}>
          {data.map((item, idx) => (
            <SwiperSlide className="aspect-w-16 aspect-h-9" key={idx}>
              <img src={item.img} alt="이미지" />
              <div className="text-[#fff]">
                <p className=" absolute top-[5rem] ml-[10.25rem] text-[4rem] font-bold">0{item.id + 1}</p>
                <div className="absolute ml-[10.25rem] bottom-[15rem] inset-0 flex flex-col justify-end transition-opacity">
                  <p className="text-[2.25rem] mb-[2rem]" dangerouslySetInnerHTML={{ __html: item.title }} />
                  <p dangerouslySetInnerHTML={{ __html: item.contentstext }} className=" text-[1.25rem]" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MobileSlice;
