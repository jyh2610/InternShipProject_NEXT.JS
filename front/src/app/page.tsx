"use client";

import { useEffect, useState } from "react";

import LoginBtn from "@/components/auth/LoginBtn";
import FadeProvider from "@/components/FadeProvider";
import WithNavFooter from "@/components/layout/WithNavFooter";
import MobileSlice from "@/components/main/section-5/MobileSlice";
import SectionFive from "@/components/main/SectionFive";
import SectionFour from "@/components/main/SectionFour";
import SectionOne from "@/components/main/SectionOne";
import SectionSix from "@/components/main/SectionSix";
import SectionThree from "@/components/main/SectionThree";
import Sectiontwo from "@/components/main/Sectiontwo";
import Line from "@/components/main/verticalline/Line";
import VerticalLine from "@/components/main/verticalline/VerticalLine";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  // 새로고침시 상단으로
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <FadeProvider>
      <WithNavFooter>
        <SectionOne />
        <Sectiontwo />
        <SectionThree />
        <Line width={0.5} height={20} />
        <SectionFour />
        <VerticalLine />
        <SectionFive />
        {/* <MobileSlice /> */}
        <SectionSix />
      </WithNavFooter>
    </FadeProvider>
  );
}
