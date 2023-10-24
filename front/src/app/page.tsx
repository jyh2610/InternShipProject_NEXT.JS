import FadeProvider from "@/components/FadeProvider";
import WithNavFooter from "@/components/layout/WithNavFooter";
import SectionFive from "@/components/main/SectionFive";
import SectionFour from "@/components/main/SectionFour";
import SectionOne from "@/components/main/SectionOne";
import SectionSix from "@/components/main/SectionSix";
// import SectionThree from "@/components/main/SectionThree";
import Sectiontwo from "@/components/main/Sectiontwo";

export default async function Home() {
  return (
    <FadeProvider>
      <WithNavFooter>
        <SectionOne />
        <Sectiontwo />
        {/* <SectionThree /> */}
        <SectionFour />
        <SectionFive />
        <SectionSix />
      </WithNavFooter>
    </FadeProvider>
  );
}
