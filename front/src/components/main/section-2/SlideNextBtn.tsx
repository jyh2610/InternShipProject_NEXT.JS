// some-inner-component.jsx
import { useSwiper } from "swiper/react";

function SlideNextBtn() {
  const swiper = useSwiper();
  return <button onClick={() => swiper.slideNext()}>다음</button>;
}

export default SlideNextBtn;
