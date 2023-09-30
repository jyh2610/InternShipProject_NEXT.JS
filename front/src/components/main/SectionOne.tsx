"use client";
import { motion, useAnimation, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import SectionProvider from "./SectionProvider";
import { dummyImg } from "@/constants/constants";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { sectionContact } from "@/redux/slicer/scrollStopper";

const SectionOne = () => {
  const controls = useAnimation();
  const sectionOneRef = useRef<HTMLImageElement | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleScroll = () => {
      const sectionOneTop = sectionOneRef.current?.getBoundingClientRect().top;
      console.log("section", sectionOneTop);

      dispatch(sectionContact({ section: sectionOneTop }));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;

      controls.start({ width: "100vw", height: `${90}vh` });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

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
