"use client";

import "swiper/css";
import "swiper/css/pagination";

import Slider from "./Slider";

//eslint-disable-next-line import/order

import "./style.css";

function ThirdCarousel() {
  // const swiperObj: SwiperOptions = {
  //   loop: true,
  //   slidesPerView: "auto",
  //   spaceBetween: 20,
  //   navigation: { prevEl: prevRef, nextEl: nextRef },
  //   modules: [Navigation],
  //   allowTouchMove: false,
  // };

  // const dummyImgData = [img, img, img, img, img, img, img, img];
  return (
    <>
      <Slider />
    </>
  );
}

export default ThirdCarousel;
