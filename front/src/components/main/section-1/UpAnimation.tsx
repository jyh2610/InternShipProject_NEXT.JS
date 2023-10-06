import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { dummyImg, img } from "@/constants/constants";

gsap.registerPlugin(ScrollTrigger);
function UpAnimation() {
  const sectionOneRef = useRef(null);

  useEffect(() => {
    const sectionOneElement = sectionOneRef.current;

    if (sectionOneElement) {
      gsap.to(sectionOneElement, {
        scale: 2, // Set the initial scale to 1 (normal size)
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: sectionOneElement,
          start: "bottom bottom",
          end: "bottom 90%",
          scrub: true,
          anticipatePin: 1,
        },
      });
    }
  }, []);
  return (
    <div className="w-1/2 h-1/2 relative">
      <img ref={sectionOneRef} src={img} alt="Dummy Image" className="w-full h-full object-cover" />
      <div className="absolute top-10 h-full left-11 p-10 flex flex-col items-center">
        <p className="text-white text-2xl">공간은 이야기를 품고 있습니다.</p>
        <p className="text-white text-2xl">우리는 그 이야기를 아름답게 만듭니다.</p>
      </div>
    </div>
  );
}

export default UpAnimation;
