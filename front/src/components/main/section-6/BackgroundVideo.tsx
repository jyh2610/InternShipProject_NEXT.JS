"use client";

import NoticeButton from "./NoticeButton";
import Text from "./Text";

import "./style.css";

function BackgroundVideo() {
  return (
    <div className="relative">
      <div className="w-full mainwidth mx-auto">
        <div style={{ border: "0.875rem solid black", borderRadius: "1.2rem" }} className="video-layout">
          <video
            id="video"
            autoPlay // 자동 재생을 활성화
            muted
            loop
            draggable="false"
            playsInline
          >
            <source src="assets/video/3DPlayMode.mp4" type="video/mp4" />
          </video>
        </div>
        <div
          className="absolute text-center left-[50%] top-[0]"
          style={{
            transform: "translateX(-50%)",
            width: "200px",
            height: "34px",
            backgroundColor: "rgb(28 28 28)",
            borderRadius: "0 0 0.5rem 0.5rem",
          }}
        ></div>
        <div
          className="absolute text-center left-[50%] top-[50%]"
          style={{
            transform: "translate(-50%, -50%)",
            width: "100%",
            maxWidth: "1600px",
          }}
        >
          <Text />
          <NoticeButton />
        </div>
      </div>
    </div>
  );
}
export default BackgroundVideo;
