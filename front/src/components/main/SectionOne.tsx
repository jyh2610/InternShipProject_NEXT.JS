"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SectionOne = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDisabled, setScrollDisabled] = useState(true);
  // 스크롤 이벤트 리스너를 추가하여 스크롤 위치를 감지합니다.
  useEffect(() => {
    const handleScroll = () => {
      scrollDisabled && setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 스크롤 위치에 따라 애니메이션을 제어합니다.
  const animationVariants = {
    initial: { scale: 1.5 }, // 초기 스케일 설정 (작은 크기)
    scrolled: { scale: 6 }, // 스크롤 시 크게 확대
  };

  const animationTransition = {
    duration: 0.5,
  };

  return (
    <section className="h-screen flex justify-center items-center relative">
      {/* section 스타일을 설정하여 섹션의 높이와 정렬을 지정 */}
      <motion.div
        initial="initial"
        animate={scrollY > 10 ? "scrolled" : "initial"} // 10 이상일 때 애니메이션 활성화
        variants={animationVariants}
        transition={animationTransition}
        style={{
          width: "50%",
          height: "100px",
          position: "absolute",
          bottom: "0",
          backgroundColor: "blue",
        }}
      ></motion.div>
    </section>
  );
};

export default SectionOne;
