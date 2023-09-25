"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

import { ScrollPage } from "react-scroll-motion";
import SectionProvider from "./SectionProvider";
const SectionOne = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  // 스크롤 위치에 따라 scale 값을 계산
  const scale = 1 + 0.5; // 스크롤 위치에 따라 1에서 1.5까지 증가

  return (
    <SectionProvider>
      <motion.div
        style={{
          border: "1px solid black",
          width: "100px", // 너비를 100%로 설정하여 화면 가로폭에 맞게
          height: "100px", // 높이를 화면 높이의 절반에 맞게
        }}
        className="box"
        animate={{
          scale: scale, // 계산된 scale 값 적용
        }}
      />
    </SectionProvider>
  );
};

export default SectionOne;
