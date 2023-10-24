"use client";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { img } from "@/constants/constants";

import Slider from "./Slider";

import type { SwiperOptions } from "swiper/types";
//eslint-disable-next-line import/order

import "./style.css";

interface IdxProps {
  idx: number;
  prevRef: any;
  nextRef: any;
}

function ThirdCarousel({ idx, prevRef, nextRef }: IdxProps) {
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
