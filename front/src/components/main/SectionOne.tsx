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
        // 확대 효과 설정
        scale: 2, // 이미지를 2배 확대
        duration: 0.2, // 1초 동안 확대 애니메이션 수행
        ease: "power1.inOut", // 이징 효과 설정 (원하는 이징 효과로 변경 가능)

        // ScrollTrigger 설정
        scrollTrigger: {
          trigger: sectionOneElement,
          start: "top center", // 스크롤 시작 위치 (뷰포트 중앙 기준)
          end: "bottom center", // 스크롤 종료 위치 (뷰포트 중앙 기준)
          scrub: true, // 스크롤 속도에 따라 확대 효과를 조절
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
            width: "50%",
            height: "300px",
          }}
        />
      </div>
    </SectionProvider>
  );
};

export default SectionOne;
