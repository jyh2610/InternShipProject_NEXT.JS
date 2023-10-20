"use client";

import React from "react";

import ScrollDown from "@/components/icons/ScrollDown";
import { mainImg } from "@/constants/constants";
import useContact from "@/hooks/useContact";

import MainText from "./MainText";

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
