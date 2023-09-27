"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame, useAnimation } from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  // 화면 너비의 반을 계산합니다.
  //   const screenWidth = window?.innerWidth;
  //   console.log(screenWidth, "dd");
  //   const halfScreenWidth = screenWidth / 2;
  const baseX = useMotionValue(0);

  const { scrollY } = useScroll();

  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  //   움직이는 범위 조절

  const x = useTransform(baseX, (v) => `${wrap(0, -100, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax tracking-tighter whitespace-nowrap font-extrabold leading-normal">
      <motion.div className="scroller " style={{ x }}>
        <span
          className=""
          style={{ textShadow: "-1px 0 rgb(78,78,78), 0 1px rgb(78,78,78), 1px 0 rgb(78,78,78), 0 -1px rgb(78,78,78)", color: "rgba(255, 0, 0, 0)" }}
        >
          {children}
        </span>
        <span style={{ textShadow: "-1px 0 rgb(78,78,78), 0 1px rgb(78,78,78), 1px 0 rgb(78,78,78), 0 -1px rgb(78,78,78)", color: "rgba(255, 0, 0, 0)" }}>
          {children}{" "}
        </span>
        <span style={{ textShadow: "-1px 0 rgb(78,78,78), 0 1px rgb(78,78,78), 1px 0 rgb(78,78,78), 0 -1px rgb(78,78,78)", color: "rgba(255, 0, 0, 0)" }}>
          {children}{" "}
        </span>
        <span style={{ textShadow: "-1px 0 rgb(78,78,78), 0 1px rgb(78,78,78), 1px 0 rgb(78,78,78), 0 -1px rgb(78,78,78)", color: "rgba(255, 0, 0, 0)" }}>
          {children}{" "}
        </span>
      </motion.div>
    </div>
  );
}
export default ParallaxText;
