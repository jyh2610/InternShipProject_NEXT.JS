"use client";

import SectionOne from "@/components/main/SectionOne";
import SectionFour from "@/components/main/SectionFour";
import SectionFive from "@/components/main/SectionFive";
import SectionSix from "@/components/main/SectionSix";
import Footer from "@/components/Footer";
import Sectiontwo from "@/components/main/Sectiontwo";
import FadeProvider from "@/components/FadeProvider";
import SectionThree from "@/components/main/SectionThree";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <FadeProvider>
      <SectionOne />
      <Sectiontwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      {/* <Footer /> */}
    </FadeProvider>
  );
}
