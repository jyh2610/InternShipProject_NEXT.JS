"use client";
import ParallaxText from "../ParallaxText";

function SectionFour() {
  return (
    <>
      <div className="text-7xl my-[50vh]" style={{ overflow: "hidden" }}>
        <ParallaxText baseVelocity={-5}>공간은 이야기를 품고 있습니다. 우리는 그 이야기를 아름답게 만듭니다.</ParallaxText>
        <ParallaxText baseVelocity={4}>인테리어는 더 나은 삶을 위한 시작입니다. 우리와 함께 새로운 시작을 경험하세요.</ParallaxText>
        <ParallaxText baseVelocity={-5}>인테리어는 더 나은 삶을 위한 시작입니다. 우리와 함께 새로운 시작을 경험하세요.</ParallaxText>
      </div>
    </>
  );
}

export default SectionFour;
