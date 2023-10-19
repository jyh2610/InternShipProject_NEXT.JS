import { getCookie } from "@/API/cookie";
import FadeProvider from "@/components/FadeProvider";
import WithNavFooter from "@/components/layout/WithNavFooter";
import SectionFive from "@/components/main/SectionFive";
import SectionFour from "@/components/main/SectionFour";
import SectionOne from "@/components/main/SectionOne";
import SectionSix from "@/components/main/SectionSix";
import SectionThree from "@/components/main/SectionThree";
import Sectiontwo from "@/components/main/Sectiontwo";
import Line from "@/components/main/verticalline/Line";
import VerticalLine from "@/components/main/verticalline/VerticalLine";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
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
