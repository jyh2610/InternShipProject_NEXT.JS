"use client";
import React from "react";

import Link from "next/link";
const FindButton = () => {
  return (
    <div className="flex justify-around">
      <Link href="/" className="login-form-forgot text-[#000]">
        아이디 찾기 |
      </Link>
      <Link href="/" className="login-form-forgot text-[#000]">
        비밀번호 찾기 |
      </Link>
      <Link href="/signup/provideinfo" className="text-[#000]">
        회원가입
      </Link>
    </div>
  );
};

export default FindButton;
