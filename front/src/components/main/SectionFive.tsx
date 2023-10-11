"use client";
import React from "react";
import "../../components/main/section-5/style.css";
function SectionFive() {
  return (
    <div className="relative">
      <div className="absolute top-0 font-white text-3xl">
        <div className="flex justify-around">
          <p>01</p>
          <p>아키플 첫번째영역</p>
        </div>
        <p>설명</p>
      </div>
      <img
        className="w-full mx-auto"
        src="https://img.freepik.com/free-photo/empty-chair-in-restaurant_1339-5436.jpg?w=1380&t=st=1695710152~exp=1695710752~hmac=35aaec832880968cd682127a61258c48be0f6b22e944413c35a3150cacdaaeeb"
        alt="이미지임시"
      />
    </div>
  );
}

export default SectionFive;
