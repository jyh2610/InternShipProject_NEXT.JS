"use client";
import { useRef } from "react";

import { wrap } from "@motionone/utils";
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from "framer-motion";
interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [1, 1000], [1, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -100, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 800);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax tracking-tighter whitespace-nowrap font-bold bg-white" style={{ lineHeight: "10rem", fontSize: "7rem" }}>
      <motion.div className="scroller " style={{ x, color: "#fff" }}>
        <span style={{ textShadow: "-1px 0 rgb(78,78,78), 0 1px rgb(78,78,78), 1px 0 rgb(78,78,78), 0 -1px rgb(78,78,78)" }}>{children} </span>
        <span style={{ textShadow: "-1px 0 rgb(78,78,78), 0 1px rgb(78,78,78), 1px 0 rgb(78,78,78), 0 -1px rgb(78,78,78)" }}>{children} </span>
        <span style={{ textShadow: "-1px 0 rgb(78,78,78), 0 1px rgb(78,78,78), 1px 0 rgb(78,78,78), 0 -1px rgb(78,78,78)" }}>{children} </span>
      </motion.div>
    </div>
  );
}

export default ParallaxText;
