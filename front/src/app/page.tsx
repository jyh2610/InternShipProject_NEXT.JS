"use client";

import SectionOne from "@/components/main/SectionOne";
import SectionFour from "@/components/main/SectionFour";
import SectionFive from "@/components/main/SectionFive";
import SectionSix from "@/components/main/SectionSix";
import Sectiontwo from "@/components/main/Sectiontwo";
import FadeProvider from "@/components/FadeProvider";
import SectionThree from "@/components/main/SectionThree";
import { useEffect, useState } from "react";
import VerticalLine from "@/components/main/verticalline/VerticalLine";
import LoginBtn from "@/components/auth/LoginBtn";
import WithNavFooter from "@/components/layout/WithNavFooter";

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
        <SectionFour />
        <VerticalLine />
        <SectionFive />
        <SectionSix />
      </WithNavFooter>
    </FadeProvider>
  );
}
