"use client";

import useSectionTop from "@/hooks/useSectionTop";
import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import Title from "./section-6/title";

function SectionSix() {
  const sectionTopRef = useSectionTop();

  return (
    // isHeightDifferencePositive1 &&
    <div className="mx-auto mainwidth max-w-top" ref={sectionTopRef}>
      <Title />
      <div className="relative">
        <div
          style={{
            backgroundImage:
              "url(https://img.freepik.com/free-photo/cafe-and-living-room-loft-style_1150-10726.jpg?w=1380&t=st=1695702593~exp=1695703193~hmac=4a3993d7475357eb141d203d44aaffc5695b8d6ea854a6e80d45b2d95bc2f598)",
            width: "100%",
            height: "37.5rem",
            objectFit: "cover",
            filter: "grayscale(50%)",
          }}
        >
          <div className="absolute text-center left-[50%] top-[50%]" style={{ transform: "translate(-50%, -50%)" }}>
            <p className="text-[#FFFFFF] text-3xl">
              디자인의 세계로 오신 것을 환영합니다. <br />
              <span className="font-bold">우리와 함께 이야기를 시작하세요.</span>
            </p>
            <button
              style={{
                background: "#2AA86B",
                margin: "0 auto",
                opacity: "0.8",
                padding: "16px 30px",
                borderRadius: "2rem",
                border: "none",
                color: "white",
                fontSize: "1.2rem",
                zIndex: "-99",
              }}
            >
              <a href="/" className="text-white">
                {" "}
                아키플 비즈니스 문의
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionSix;
