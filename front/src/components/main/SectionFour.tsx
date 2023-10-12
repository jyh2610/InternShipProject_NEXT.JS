"use client";
import useSectionTop from "@/hooks/useSectionTop";
import TextAnimation from "./section-4/TextAnimation";

function SectionFour() {
  const sectionTopRef = useSectionTop();
  return (
    <>
      <div ref={sectionTopRef} style={{ overflow: "hidden", height: "" }}>
        <TextAnimation />
      </div>
    </>
  );
}

export default SectionFour;
