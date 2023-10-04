"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { dummyImg } from "@/constants/constants";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { sectionContact } from "@/redux/slicer/scrollStopper";
import SectionProvider from "./SectionProvider";

const SectionOne = () => {
  const controls = useAnimation();
  const sectionOneRef = useRef<HTMLImageElement | null>(null);
  const dispatch = useAppDispatch();

  const rect = useAppSelector((state) => state.scrollStopper);

  const navBot = rect.navBottom;
  const sectionTop = rect.sectionTop;
  const isContact = navBot - sectionTop;
  console.log(isContact, sectionTop);

  useEffect(() => {
    const handleScroll = () => {
      const sectionOneTop = sectionOneRef.current?.getBoundingClientRect().top;
      dispatch(sectionContact({ section: sectionOneTop }));

      // Check if isContact is greater than or equal to 0
      if (isContact >= 0) {
        // If isContact is greater than or equal to 0, expand the image to full screen
        controls.start({ width: "100vw", height: "70vh" });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch, isContact, controls]);

  return (
    <SectionProvider>
      <div style={{ minHeight: "100vh" }} className="flex justify-center items-end relative h-screen">
        {/* Set minHeight to ensure the container takes at least the full viewport height */}
        <motion.img
          ref={sectionOneRef}
          src={dummyImg}
          animate={controls}
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
