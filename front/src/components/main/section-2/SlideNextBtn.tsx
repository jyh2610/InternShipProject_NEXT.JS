import { MutableRefObject } from "react";
import { useSwiper } from "swiper/react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function SlideNextBtn({ nextRef }: { nextRef: MutableRefObject<HTMLDivElement | null> }) {
  const swiper = useSwiper();
  return (
    <div ref={nextRef} className="mr-10 h-full z-999 absolute top-10 left-0">
      <BsFillArrowRightCircleFill className="text-7xl z-10 absolute top-10 left-0 backdrop-blur-[20px]" onClick={() => swiper?.slideNext()} />
    </div>
  );
}

export default SlideNextBtn;
