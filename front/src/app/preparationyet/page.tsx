import React from "react";
import "./style.css";
import { Button } from "antd";
import Link from "next/link";
const page = () => {
  return (
    <div className="font-bold relative bg-gray-300 h-screen w-full shadow-2xl">
      <div className="modal">
        <img className="mx-1/2" src="https://i.pinimg.com/736x/7e/2e/55/7e2e55a38885bfe567085239eeeba9a1.jpg" alt="보노보노" />
        <p className="text-center text-2xl">아직 준비중입니다.....</p>
        <Button className="p-5">
          <Link href="/">홈으로가기</Link>
        </Button>
      </div>
    </div>
  );
};

export default page;
