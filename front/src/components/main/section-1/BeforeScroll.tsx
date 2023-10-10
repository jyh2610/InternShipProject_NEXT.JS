import { mainImg } from "@/constants/constants";
import React from "react";
import MainText from "./MainText";
import ScrollDown from "@/components/icons/ScrollDown";

function BeforeScroll() {
  return (
    <div style={{ backgroundImage: `url(${mainImg})` }} className="bg-main bg-no-repeat bg-cover object-cover bg-center	h-screen relative">
      <MainText />
      <ScrollDown />
    </div>
  );
}

export default BeforeScroll;
