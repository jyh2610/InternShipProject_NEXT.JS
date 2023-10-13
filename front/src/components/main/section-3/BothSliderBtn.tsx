import React, { useEffect, useRef } from "react";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function BothSliderBtn({ setPrevRef, setNextRef }: { setPrevRef: Function; setNextRef: Function }) {
  // useRef로 DOM 요소에 대한 레퍼런스 생성
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  console.log("btn", prevButtonRef);

  useEffect(() => {
    // 컴포넌트가 마운트되면 DOM 요소를 할당
    setPrevRef(prevButtonRef.current);
    setNextRef(nextButtonRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // 빈 배열을 사용하여 이펙트는 한 번만 실행

  return (
    <div className="flex justify-start gap-3 pl-10 mt-10">
      <div ref={prevButtonRef}>
        <BsArrowLeft className="text-4xl p-1 bg-bg-gray" />
      </div>
      <div ref={nextButtonRef}>
        <BsArrowRight className="text-4xl p-1 bg-bg-gray" />
      </div>
    </div>
  );
}

export default BothSliderBtn;
