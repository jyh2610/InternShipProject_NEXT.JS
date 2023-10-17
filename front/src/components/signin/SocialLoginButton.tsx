"use client";

import React from "react";

import { signIn, signOut, useSession } from "next-auth/react";

import { loginObj } from "@/constants/constants";
import { useRouter } from "next/navigation";

const SocialLoginButton = () => {
  const { data: session } = useSession();
  const router = useRouter();
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
              signIn(data.social, {
                callbackUrl: "/",
              });
            }}
            src={data.icon}
            alt={data.name}
          />
        ))}{" "}
      </div>
    </>
  );
};

export default SocialLoginButton;
