"use client";

import React from "react";

import { signIn, useSession } from "next-auth/react";

import { loginObj } from "@/constants/constants";

const SocialLoginButton = () => {
  const { data: session } = useSession(); // Use useSession to access the session data

  // Check if the user is authenticated or if there's an access token

  // 소셜로그인
  const sociallogin = async (socialtype: string) => {
    console.log("hi");

    console.log("hi_______", session);
    await signIn(socialtype);
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
