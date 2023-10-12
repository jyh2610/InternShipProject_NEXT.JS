"use client";

import ParallaxText from "@/components/ParallaxText";

function TextAnimation() {
  return (
    // <div className="pt-[5rem] pb-[5rem]">
    //   <ParallaxText baseVelocity={-5}>공간은 이야기를 품고 있습니다. 우리는 그 이야기를 아름답게 만듭니다.</ParallaxText>
    //   <ParallaxText baseVelocity={5}>인테리어는 더 나은 삶을 위한 시작입니다. 우리와 함께 새로운 시작을 경험하세요.</ParallaxText>
    //   <ParallaxText baseVelocity={-5}>인테리어는 더 나은 삶을 위한 시작입니다. 우리와 함께 새로운 시작을 경험하세요.</ParallaxText>
    // </div>
    <div className="flow-container">
      <div className="flow-text">
        <div className="flow-wrap flow-wrap-left">공간은 이야기를 품고 있습니다. 우리는 그 이야기를 아름답게 만듭니다.</div>
        <div className="flow-wrap flow-wrap-left">공간은 이야기를 품고 있습니다. 우리는 그 이야기를 아름답게 만듭니다.</div>
        <div className="flow-wrap flow-wrap-left">공간은 이야기를 품고 있습니다. 우리는 그 이야기를 아름답게 만듭니다.</div>
        <div className="flow-wrap flow-wrap-left">공간은 이야기를 품고 있습니다. 우리는 그 이야기를 아름답게 만듭니다.</div>
      </div>
      <div className="flow-text">
        <div className="flow-wrap-right">인테리어는 더 나은 삶을 위한 시작입니다. 우리와 함께 새로운 시작을 경험하세요.</div>
        <div className="flow-wrap-right">인테리어는 더 나은 삶을 위한 시작입니다. 우리와 함께 새로운 시작을 경험하세요.</div>
        <div className="flow-wrap-right">인테리어는 더 나은 삶을 위한 시작입니다. 우리와 함께 새로운 시작을 경험하세요.</div>
        <div className="flow-wrap-right">인테리어는 더 나은 삶을 위한 시작입니다. 우리와 함께 새로운 시작을 경험하세요.</div>
      </div>
      <div className="flow-text">
        <div className="flow-wrap-left">공간은 이야기를 품고 있습니다. 우리는 그 이야기를 아름답게 만듭니다.</div>
        <div className="flow-wrap-left">공간은 이야기를 품고 있습니다. 우리는 그 이야기를 아름답게 만듭니다.</div>
        <div className="flow-wrap-left">공간은 이야기를 품고 있습니다. 우리는 그 이야기를 아름답게 만듭니다.</div>
        <div className="flow-wrap-left">공간은 이야기를 품고 있습니다. 우리는 그 이야기를 아름답게 만듭니다.</div>
      </div>
    </div>
  );
}
export default TextAnimation;
