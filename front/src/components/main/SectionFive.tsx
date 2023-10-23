"use client";
import React from "react";

// import { useMediaQuery } from "react-responsive";

import "../../components/main/section-5/style.css";
import HoverImage from "./section-5/HoverImage";
import { Mobile } from "./section-5/Mobile";
import MobileSlice from "./section-5/MobileSlice";

function SectionFive() {
  return (
    <>
      {" "}
      <div className="lg:hidden">
        <MobileSlice />
      </div>
      <div className="hidden lg:block">
        <HoverImage />
      </div>
    </>
  );
}

export default SectionFive;
