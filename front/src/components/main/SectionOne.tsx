// SectionOne.tsx
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { dummyImg } from "@/constants/constants";
import { useAppDispatch } from "@/redux/hooks";

import SectionProvider from "./SectionProvider";
import useSectionTop from "@/hooks/useSectionTop";

const SectionOne = () => {
  const controls = useAnimation();
  const sectionOneRef = useSectionTop();
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Handle the isContact logic here if needed

    // If isContact is greater than or equal to 0, expand the image to full screen
    controls.start({ width: "100vw", height: "70vh" });
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
