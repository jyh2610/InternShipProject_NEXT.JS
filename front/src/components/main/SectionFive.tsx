import React from "react";

import "../../components/main/section-5/style.css";
import HoverImage from "./section-5/HoverImage";
import MobileSlice from "./section-5/MobileSlice";

function SectionFive() {
  return (
    <div className="after-layout py-[4rem] md:py=[2rem]" data-aos="fade-up" data-aos-offset="350" data-aos-delay="50">
      {" "}
      <div className="lg:hidden block">
        <MobileSlice />
      </div>
      <div className="lg:block hidden">
        <HoverImage />
      </div>
    </div>
  );
}

export default SectionFive;
