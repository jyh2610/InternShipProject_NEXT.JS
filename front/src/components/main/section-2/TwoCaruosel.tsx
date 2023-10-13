"use client";
import type {SetStateAction}
from "react";
import {useState} from "react";

import {A11y, Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

import SliderText from "./SliderText";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function TwoCarousel() {
    const [imgIdx, setImgIdx] = useState(0);
    const dummyData = [1, 2, 3, 4];

    const handleSlideChange = (swiper : {
        realIndex: SetStateAction<number>
    }) => {
        setImgIdx(swiper.realIndex);
    };

    return (
        < div className = "flex" > <Swiper style = {{ margin: "0" }}className = " w-10/12" navigation = {
            true
        }
        loop = {
            true
        }
        modules = {
            [Navigation, A11y]
        }
        onSlideChange = {
            handleSlideChange
        } > {
            dummyData.map(
                (_, idx) => (< SwiperSlide key = {
                    idx
                } > <div className = "relative bg-dummyImg bg-center bg-no-repeat bg-cover h-full object-cover aspect-w-16 aspect-h-9"> <SliderText /> </div></SwiperSlide>)
            )
        }</Swiper> < div className = "flex items-end ml-8 w-24" > <span className = "text-4xl font-bold w-10 text-right" > {
            imgIdx + 1
        }</span><span> /</span > <span className = "text-2xl font-bold  w-10" > {
            dummyData.length
        }</span></div></div>
    );
}

export default TwoCarousel;
