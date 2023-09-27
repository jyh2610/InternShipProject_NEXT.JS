"use client";
import dynamic from "next/dynamic";
import SectionOne from "@/components/main/SectionOne";
import SectionFour from "@/components/main/SectionFour";
import SectionFive from "@/components/main/SectionFive";
import SectionSix from "@/components/main/SectionSix";
import Footer from "@/components/MainFooter";
import Sectiontwo from "@/components/main/Sectiontwo";
import FadeProvider from "@/components/FadeProvider";
import SectionThree from "@/components/main/SectionThree";
import { useEffect, useState } from "react";
import MainFooter from "@/components/MainFooter";

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
      <>
        <SectionOne />
        <Sectiontwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <MainFooter />
      </>
    </FadeProvider>
  );
}
