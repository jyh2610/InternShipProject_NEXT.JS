"use client";
import Link from "next/link";

function Text() {
  return (
    <div className="flex justify-evenly">
      <div className="text-5xl leading-none">
        <p>올인원 3D 인테리어</p>
        <p>디자인 도구</p>
      </div>
      <div className="w-2/6 text-2xl leading-none">
        <span>아키플 2.0을 통해 고객들은 실제로 거주 공간을 경험하는 것과 유사한 현실감 있는 가상 체험을 할 수 있습니다. </span>
        <span>아키플은 거주 공간의 디자인과 느낌을 미리 확인할 수 있어, 고객들이 더 확신을 가지고 결정을 내릴 수 있도록 도와줍니다.</span>
        <Link href={"/"}>
          <p>Archiple 2.0에 대해서 더 궁금하다면?</p>
        </Link>
      </div>
    </div>
  );
}

export default Text;
