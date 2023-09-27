"use client";
import { motion, useAnimation, useScroll } from "framer-motion";
import { useEffect } from "react";
import SectionProvider from "./SectionProvider";
import { dummyImg } from "@/constants/constants";

const SectionOne = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;

      // Animate the width and height of the div immediately based on scroll position
      controls.start({ width: "100vw", height: `${90}vh` });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <SectionProvider>
      <div style={{ minHeight: "100vh" }} className="flex justify-center items-end relative h-screen">
        {/* Set minHeight to ensure the container takes at least the full viewport height */}
        <motion.img
          src={dummyImg}
          animate={controls}
          style={{
            bottom: "0",
            width: "70%",
            height: "300px",
          }}
        />
      </div>
    </SectionProvider>
  );
};

export default SectionOne;
