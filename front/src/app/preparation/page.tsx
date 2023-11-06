import React from "react";
import "./style.css";

import Link from "next/link";
import { WarningOutlined } from "@ant-design/icons";
const page = () => {
  return (
    <div className="wrap relative h-screen w-full">
      <div className="modal shadow-1xl ">
        <WarningOutlined />
        <p className="font-bold text-center text-[2rem]">현재 페이지는 준비중 입니다.</p>
        <p className="text-center text-[1.25rem]">
          보다 나은 서비스 제공을 위하여 페이지 준비중에 있습니다.
          <br />
          빠른 시일내로 준비하여 찾아 뵙겠습니다.
        </p>
        <Link className="home-btn" href="/">
          홈으로가기
        </Link>
      </div>
    </div>
  );
};

export default page;
