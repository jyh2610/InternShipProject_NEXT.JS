import React from "react";
import "./style.css";

import Link from "next/link";
const page = () => {
  return (
    <div className="wrap relative h-screen w-full shadow-2xl ">
      <div className="modal">
        <img className="mx-1/2" src="https://i.pinimg.com/736x/7e/2e/55/7e2e55a38885bfe567085239eeeba9a1.jpg" alt="보노보노" />
        <p className="font-bold text-center text-2xl">아직 준비중입니다..</p>
        <Link className="home-btn" href="/">
          홈으로가기
        </Link>
      </div>
    </div>
  );
};

export default page;
