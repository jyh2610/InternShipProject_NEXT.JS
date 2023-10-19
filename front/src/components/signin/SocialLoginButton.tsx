"use client";

import React, { useEffect } from "react";

import { signIn, useSession } from "next-auth/react";

import { loginObj } from "@/constants/constants";

import type { Session } from "next-auth";

const SocialLoginButton = () => {
  const { data } = useSession();
  const { accessToken }: { accessToken: string | null } = data;

  useEffect(() => {}, []);

  // 소셜로그인
  const sociallogin = async (socialtype: string) => {
    const result = await signIn(socialtype, {
      redirect: false,
    });
    console.log(result);
    console.log(11);
    console.log(accessToken);
  };

  return (
    <>
      <div className="flex justify-between item-center mb-[1.4rem]">
        <p className=" w-1/4 h-0.5 bg-gray-400 my-auto" />
        <p className="text-[0.875rem]">SNS 계정으로 로그인</p>
        <p className="w-1/4 h-0.5 bg-gray-400 my-auto" />
      </div>
      <div className="flex justify-evenly ">
        {loginObj.map((data) => (
          <img
            key={data.name}
            onClick={() => {
              sociallogin(data.social);
            }}
            src={data.icon}
            alt={data.name}
          />
        ))}
      </div>
    </>
  );
};

export default SocialLoginButton;
