// some-inner-component.jsx
import { useRef } from "react";
import { Swiper, useSwiper } from "swiper/react";

function SlideNextBtn() {
  const swiper = useSwiper();
  return <button onClick={() => swiper.slideNext()}>다음</button>;
}

export default SlideNextBtn;
