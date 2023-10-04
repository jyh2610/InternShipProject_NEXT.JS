"use client";
import { useAppSelector } from "@/redux/hooks";
import ParallaxText from "../ParallaxText";
import useContact from "@/hooks/useContact";

function SectionFour() {
  const scrollHeight = useAppSelector((state) => state.scrollStopper.navBottom);
  const scrollTopHeight = useAppSelector((state) => state.scrollStopper.sectionTop);
  console.log(scrollHeight, "dd");
  console.log(scrollTopHeight, "ddd");
  const navTopRef = useContact("top");
  return (
    <>
      <div ref={navTopRef} data-anchor="Page 2" className="text-7xl my-[10%] h-[50vh]" style={{ overflow: "hidden" }}>
        <ParallaxText baseVelocity={-4}>공간은 이야기를 품고 있습니다. 우리는 그 이야기를 아름답게 만듭니다.</ParallaxText>
        <ParallaxText baseVelocity={3}>인테리어는 더 나은 삶을 위한 시작입니다. 우리와 함께 새로운 시작을 경험하세요.</ParallaxText>
        <ParallaxText baseVelocity={-4}>인테리어는 더 나은 삶을 위한 시작입니다. 우리와 함께 새로운 시작을 경험하세요.</ParallaxText>
      </div>
    </>
  );
}

export default SectionFour;
