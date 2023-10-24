import React from "react";

import "../../components/main/section-5/style.css";
import HoverImage from "./section-5/HoverImage";
import MobileSlice from "./section-5/MobileSlice";

function SectionFive() {
  return (
    <div className="after-layout pb-[4rem] md:py=[2rem]">
      {" "}
      <div className="lg:hidden">
        <MobileSlice />
      </div>
      <div className="hidden lg:block">
        <HoverImage />
      </div>
    </div>
  );
}

export default SectionFive;
