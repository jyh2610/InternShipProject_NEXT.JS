import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { dummyImg } from "@/constants/constants";
import SectionProvider from "./SectionProvider";

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
    <SectionProvider>
      <div id="test" className="flex justify-center items-end relative h-screen mb-96">
        {/* 이미지 요소 */}
        <img
          ref={sectionOneRef}
          src={dummyImg}
          alt="Dummy Image"
          style={{
            width: "50%", // Set width to 100% to fill the screen horizontally
            height: "50vh", // Set height to 100vh to fill the entire viewport vertically
            objectFit: "cover", // Ensure the image covers the entire area
          }}
        />
      </div>
    </SectionProvider>
  );
};

export default SectionOne;
