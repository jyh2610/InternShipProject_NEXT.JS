import React from "react";

import "../../components/main/section-5/style.css";
// import HoverImage from "./section-5/HoverImage";
import MobileSlice from "./section-5/MobileSlice";
import TabImage from "./section-5/TabImage";

function SectionFive() {
  return (
    <div className="after-layout py-[2rem] md:py=[2rem]" data-aos="fade-up" data-aos-delay="100">
      {" "}
      <div className="lg:hidden block">
        <MobileSlice />
      </div>
      <div className="lg:block hidden">
        {/* <HoverImage /> */}
        <TabImage />
      </div>
    </div>
  );
}

export default SectionFive;
