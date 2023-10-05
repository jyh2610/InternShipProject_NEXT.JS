import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { dummyImg } from "@/constants/constants";

gsap.registerPlugin(ScrollTrigger);

const SectionOne = () => {
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
    <div id="test" className="flex justify-center items-end relative h-screen mb-96">
      <div className="w-1/2 h-1/2 relative">
        <img ref={sectionOneRef} src={dummyImg} alt="Dummy Image" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 h-full flex items-center">
          <p className="text-white text-4xl font-bold">Your Text Here</p>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
