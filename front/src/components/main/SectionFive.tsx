import React from "react";

import "../../components/main/section-5/style.css";
import HoverImage from "./section-5/HoverImage";
import MobileSlice from "./section-5/MobileSlice";

function SectionFive() {
  return (
    <>
      <div className="sm:hidden ">
        <MobileSlice />
      </div>
      <div className="sm:block hidden flex justify-start re_after" data-aos="fade-up" data-aos-offset="400" data-aos-delay="100">
        <HoverImage />
      </div>
    </>
  );
}

export default SectionFive;
