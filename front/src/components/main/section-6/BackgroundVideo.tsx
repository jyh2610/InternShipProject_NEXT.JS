"use client";

import Text from "./Text";

import NoticeButton from "./NoticeButton";
import "./style.css";

function BackgroundVideo() {
  return (
    <div className="relative">
      <div className="w-full md:w-[1600px] mx-auto">
        <div className="video-layout">
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
