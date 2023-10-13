"use client";

import React from "react";

import { signIn, signOut, useSession } from "next-auth/react";

import { loginObj } from "@/constants/constants";
import Image from "next/image";

const SocialLoginButton = () => {
  const { data: session } = useSession();

  return (
    <>
      <div className="flex justify-between item-center mb-[1.4rem]">
        <p className=" w-1/4 h-0.5 bg-gray-400 my-auto" />
        <p className="text-[0.875rem]">SNS 계정으로 로그인</p>
        <p className="w-1/4 h-0.5 bg-gray-400 my-auto" />
      </div>
      <div className="flex justify-evenly ">
        {session ? ( // 세션이 있는 경우 로그아웃 버튼을 렌더링
          <button onClick={() => signOut()}>로그아웃</button>
        ) : (
          loginObj.map((data) => <Image key={data.name} onClick={() => signIn(data.social)} src={data.icon} alt={data.name} />)
        )}
      </div>
    </>
  );
};

export default SocialLoginButton;
