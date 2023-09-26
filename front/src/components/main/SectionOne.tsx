"use client";
import { motion, useAnimation, useScroll } from "framer-motion";
import { useEffect } from "react";
import SectionProvider from "./SectionProvider";

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
      <div style={{ minHeight: "100vh" }} className="flex justify-center items-end relative">
        {/* Set minHeight to ensure the container takes at least the full viewport height */}
        <motion.div
          animate={controls}
          style={{
            bottom: "0",
            paddingTop: "70px",
            width: "70%",
            height: "300px",
            backgroundColor: "black",
            border: "1px solid black",
            // Hide content overflow
          }}
        />
      </div>
    </SectionProvider>
  );
};

export default SectionOne;
