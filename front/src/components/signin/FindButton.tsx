"use client";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
const FindButton = () => {
  return (
    <div>
      <div className="flex justify-around">
        <div>
          <Link href="/" className="login-form-forgot text-[#000]">
            아이디 찾기 |
          </Link>
        </div>
        <div className="">
          <Link href="/" className="login-form-forgot text-[#000]">
            비밀번호 찾기 |
          </Link>
        </div>
        <div className="">
          <Link href="/signin" className="text-[#000]">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FindButton;
