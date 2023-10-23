import React from "react";

function MainText() {
  return (
    <div className="w-full h-screen">
      <div
        className="tit_wrap w-full"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          maxWidth: "1600px",
          padding: "0 2rem",
          color: "white",
        }}
      >
        <div className="tit">
          <div className=" text-4xl md:text-6xl font-light leading-[3rem] md:leading-[4.3rem]">
            드래그 앤 드롭으로
            <br />
            손쉬운 3D 가상인테리어 디자인
          </div>
          <div className="pt-3.5 pb-14 text-lg md:text-xl">공간은 이야기를 품고 있습니다. 우리는 그이야기를 아름답게 만듭니다</div>
        </div>
        <button
          style={{
            backgroundColor: "rgba(42, 168, 107, 0.25)",
            backdropFilter: "blur(20px)",
            border: "none",
            borderRadius: "30px",
            color: "white",
            fontSize: "0.75rem",
            width: "260px",
            height: "60px",
          }}
        >
          <span style={{ fontSize: "0.875rem", fontWeight: "500" }}>아키플 스튜디오 살펴보기</span>
        </button>
      </div>
    </div>
  );
}

export default MainText;
