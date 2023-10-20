"use client";

import React from "react";

import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

import { setCookie } from "@/API/cookie";
import { loginObj } from "@/constants/constants";

const SocialLoginButton = () => {
  const { data: session } = useSession();
  const route = useRouter();
  // 소셜로그인
  const sociallogin = async (socialtype: string) => {
    try {
      await signIn(socialtype);
      await setCookie("refresh_token", session?.accessToken!);
      await route.push("/");
    } catch (error) {
      console.log(error);
    }
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
