"use client";
import useSectionTop from "@/hooks/useSectionTop";
import TextAnimation from "./section-4/TextAnimation";

function SectionFour() {
  const sectionTopRef = useSectionTop();
  return (
    <>
      <div ref={sectionTopRef} data-anchor="Page 2" className="text-7xl bg-[#fff] h-[100vh]" style={{ overflow: "hidden" }}>
        <TextAnimation />
      </div>
    </>
  );
}

export default SectionFour;
