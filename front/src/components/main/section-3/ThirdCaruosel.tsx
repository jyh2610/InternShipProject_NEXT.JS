import "swiper/css";
import "swiper/css/pagination";

import { dummyImg } from "@/constants/constants";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

function ThirdCarousel() {
  const dummyData = [1, 2, 3, 4];
  return (
    <Swiper slidesPerView={2} loop={true} scrollbar={true} navigation={true} modules={[Navigation, Pagination]} className="mySwiper ">
      {dummyData.map((_, idx) => {
        return (
          <SwiperSlide key={idx}>
            <Image src={dummyImg} alt={"dummy"} width={1200} height={500} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default ThirdCarousel;
