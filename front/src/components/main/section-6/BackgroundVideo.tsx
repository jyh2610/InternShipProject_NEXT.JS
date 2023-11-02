"use client";

import NoticeButton from "./NoticeButton";
import Text from "./Text";

import "./style.css";

function BackgroundVideo() {
  return (
    <div className="relative">
      <div className="w-full md:w-[1600px] mx-auto">
        <div style={{ border: "0.875rem solid black", borderRadius: "1.2rem" }} className="video-layout">
          <video
            id="video"
            autoPlay // 자동 재생을 활성화
            muted
            loop
            draggable="false"
            playsInline
          >
            <source src="https://user-images.githubusercontent.com/118269595/277870569-a95c9023-c7b8-41ad-bcd0-b05954349771.mp4" type="video/mp4" />
          </video>
        </div>
        <div
          className="absolute text-center left-[50%] top-[0]"
          style={{
            transform: "translateX(-50%)",
            width: "200px",
            height: "38px",
            backgroundColor: "rgb(37 37 37)",
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
