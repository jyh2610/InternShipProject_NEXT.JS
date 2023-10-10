"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 1 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-10, -30, v)}%`);

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
    <div className="parallax tracking-tighter whitespace-nowrap font-extrabold bg-white leading-relaxed">
      <motion.div className="scroller " style={{ x, color: "#fff" }}>
        <span className="" style={{ textShadow: "-1px 0 rgb(78,78,78), 0 1px rgb(78,78,78), 1px 0 rgb(78,78,78), 0 -1px rgb(78,78,78)", color: "#fff" }}>
          {children}
        </span>
        <span style={{ textShadow: "-1px 0 rgb(78,78,78), 0 1px rgb(78,78,78), 1px 0 rgb(78,78,78), 0 -1px rgb(78,78,78)" }}>{children} </span>
        <span style={{ textShadow: "-1px 0 rgb(78,78,78), 0 1px rgb(78,78,78), 1px 0 rgb(78,78,78), 0 -1px rgb(78,78,78)" }}>{children} </span>
        <span style={{ textShadow: "-1px 0 rgb(78,78,78), 0 1px rgb(78,78,78), 1px 0 rgb(78,78,78), 0 -1px rgb(78,78,78)" }}>{children} </span>
      </motion.div>
    </div>
  );
}

export default ParallaxText;
