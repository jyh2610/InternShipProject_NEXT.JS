import "swiper/css";
import "swiper/css/pagination";

import { dummyImg } from "@/constants/constants";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { EffectCoverflow } from "swiper/modules";

function ThirdCarousel() {
  const dummyData = [1, 2, 3, 4];
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 20,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
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
