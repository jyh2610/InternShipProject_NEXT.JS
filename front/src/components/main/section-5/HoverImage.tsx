import React from "react";

const HoverImage = () => {
  return (
    <div>
      <div className="relative w-1/4 h-40 bg-gray-200 overflow-hidden transition-all duration-300 group hover:w-[100vw]">
        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-100">
          <img src="https://user-images.githubusercontent.com/144188723/273080155-924670d8-ffc1-433e-9a39-80ba6c1edd47.jpg" alt="이미지" />{" "}
          <p className="text-gray-700 font-semibold">호버 텍스트</p>
        </div>
      </div>
    </div>
  );
};

export default HoverImage;
