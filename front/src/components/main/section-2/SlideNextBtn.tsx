import { MutableRefObject } from "react";
import { useSwiper } from "swiper/react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function SlideNextBtn({ nextRef }: { nextRef: MutableRefObject<HTMLDivElement | null> }) {
  const swiper = useSwiper();
  return (
    <div className="mr-10" ref={nextRef}>
      <BsFillArrowRightCircleFill className="text-7xl" onClick={() => swiper?.slideNext()} />
    </div>
  );
}

export default SlideNextBtn;
