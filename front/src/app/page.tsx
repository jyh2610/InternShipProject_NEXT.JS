"use client";

import dynamic from "next/dynamic";
const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false },
);

import { ScrollContainer } from "react-scroll-motion";
import SectionOne from "@/components/main/SectionOne";
import SectionFour from "@/components/main/SectionFour";
import SectionFive from "@/components/main/SectionFive";
import SectionSix from "@/components/main/SectionSix";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <ScrollContainer>
      <SectionOne />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <Footer />
    </ScrollContainer>
  );
}
