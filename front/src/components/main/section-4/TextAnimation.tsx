"use client";

import ParallaxText from "@/components/ParallaxText";
function TextAnimation() {
  return (
    <div className="pt-[23.75rem] pb-[18.56rem]">
      <ParallaxText baseVelocity={-4}>공간은 이야기를 품고 있습니다. 우리는 그 이야기를 아름답게 만듭니다.</ParallaxText>
      <ParallaxText baseVelocity={3}>인테리어는 더 나은 삶을 위한 시작입니다. 우리와 함께 새로운 시작을 경험하세요.</ParallaxText>
      <ParallaxText baseVelocity={-4}>인테리어는 더 나은 삶을 위한 시작입니다. 우리와 함께 새로운 시작을 경험하세요.</ParallaxText>
    </div>
  );
}
export default TextAnimation;
