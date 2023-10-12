import { mainImg } from "@/constants/constants";
import React from "react";
import MainText from "./MainText";
import ScrollDown from "@/components/icons/ScrollDown";
import useContact from "@/hooks/useContact";

function BeforeScroll() {
  const bottomRect = useContact();
  return (
    <div ref={bottomRect} style={{ backgroundImage: `url(${mainImg})` }} className="bg-main bg-no-repeat bg-cover object-cover bg-center	h-screen relative">
      <MainText />
      <ScrollDown />
    </div>
  );
}

export default BeforeScroll;
