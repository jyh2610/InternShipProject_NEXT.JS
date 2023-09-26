"use client";

import { Button } from "antd";
import Link from "next/link";

function SectionSix() {
  return (
    <div className="mx-auto">
      <div className="flex justify-between space-x-52 mb-14 text-center">
        <div className="text-left">
          <span className="text-5xl font-bold">
            <span className="text-[#777]">당신의 공간, 우리의 열정.</span>
            <br /> 아키플과 함께 인테리어의 세계를
            <br /> 탐험하세요.
          </span>
        </div>
        <div className="text-left leading-3">
          <span className="text-2xl">
            <span className="text-[#777]">쉽고 빠르게 누구나 할 수 있는 3D 인테리어 솔루션</span>
            <br /> 아키플 2.0은 차별화 된 성능을 경험을 하고,사용자
            <br /> 공간을 미적 감각으로 채워드립니다.
          </span>
        </div>
      </div>
      <div className="relative">
        <div className="flex justify-center">
          {" "}
          <img
            className="w-full h-[35rem]"
            src="https://img.freepik.com/free-photo/cafe-and-living-room-loft-style_1150-10726.jpg?w=1380&t=st=1695702593~exp=1695703193~hmac=4a3993d7475357eb141d203d44aaffc5695b8d6ea854a6e80d45b2d95bc2f598"
            alt="이미지"
          />
        </div>

        <div style={{ transform: "translate(-50%, -50%)" }} className="absolute top-[50%] left-[50%] flex flex-col">
          <p className="text-[#FFFFFF] inline-block text-3xl">
            디자인의 세계로 오신 것을 환영합니다. <br />
            우리와 함께 이야기를 시작하세요.
          </p>

          <Button style={{ background: "#2AA86B", margin: "0 auto", opacity: "0.8" }} shape="round" type="primary">
            <Link href="/">아키플 비즈니스 문의</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SectionSix;
