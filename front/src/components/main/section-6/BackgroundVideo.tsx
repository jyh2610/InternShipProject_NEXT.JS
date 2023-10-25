"use client";

import Text from "./Text";

import NoticeButton from "./NoticeButton";
import "./style.css";

function BackgroundVideo() {
  return (
    <div className="relative">
      <div className="w-full md:w-[1600px] mx-auto">
        <div className="video-layout w-full h-full">
          <video
            width="100%"
            height="100%"
            autoPlay // 자동 재생을 활성화
            muted
            loop
            draggable="false"
          >
            <source src="http://media.w3.org/2010/05/sintel/trailer.mp4" type="video/mp4" />
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
