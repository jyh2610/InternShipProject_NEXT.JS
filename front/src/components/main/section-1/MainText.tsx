import { Button } from "antd";
import React from "react";

function MainText() {
  return (
    <div className="flex flex-col text-font-white mb-96 ml-64 gap-10">
      <span className=" text-2xl">공간은 이야기를 품고 있습니다. 우리는 그이야기를 아름답게 만듭니다</span>
      <Button style={{ backgroundColor: "#2AA86B", border: "none", borderRadius: "30px", color: "white", fontSize: "0.75rem", width: "240px", height: "60px" }}>
        아키플 스튜디오 살펴보기
      </Button>
    </div>
  );
}

export default MainText;
