"use client";
import dynamic from "next/dynamic";
import SectionOne from "@/components/main/SectionOne";
import SectionFour from "@/components/main/SectionFour";
import SectionFive from "@/components/main/SectionFive";
import SectionSix from "@/components/main/SectionSix";
import Footer from "@/components/Footer";
import Sectiontwo from "@/components/main/Sectiontwo";
import FadeProvider from "@/components/FadeProvider";
import SectionThree from "@/components/main/SectionThree";
import { useEffect, useRef } from "react";

export default function Home() {
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const childRef = useRef<HTMLDivElement | null>(null);

  const isClose = () => {
    let chTop = childRef.current?.getBoundingClientRect().top;
    let peTop = parentRef.current?.getBoundingClientRect().top;
    console.log("부모요소와의 거리(각 요소의  TOP),", chTop! - peTop!);
  };

  useEffect(() => {
    isClose();
  }, []);

  return (
    <FadeProvider>
      <>
        <div ref={parentRef}>
          <SectionOne />
        </div>
        <div ref={childRef}>
          <Sectiontwo />
        </div>
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        {/* <Footer /> */}
      </>
    </FadeProvider>
  );
}
