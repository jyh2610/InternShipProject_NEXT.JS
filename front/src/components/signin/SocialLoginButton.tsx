"use client";

import React, { useState } from "react";

import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";

import { baseApi } from "@/API/api";
import { setCookie } from "@/API/cookie";
import { loginObj } from "@/constants/constants";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setAccessToken } from "@/redux/slicer/authSlice";
import Link from "next/link";

const SocialLoginButton = () => {
  const { data: session } = useSession();
  const dispatch = useAppDispatch();
  const router = useRouter;

  const api = new baseApi();
  // 소셜로그인
  const sociallogin = async (socialtype: string) => {
    await signIn(socialtype, { callbackUrl: "/" });
    const url = `/sign/${socialtype}login`;
    // Access Token 설정
    try {
      const socialaccesstoken: any | undefined = session?.accessToken || "";
      // api.setHeaders(socialaccesstoken);
      const response = await api.post({
        url,
        options: {
          headers: {
            Authorization: `Bearer ${socialaccesstoken.accessToken}`, // yourAccessToken은 실제 엑세스 토큰 값으로 대체해야 합니다.
          },
        },
      });
      console.log(response, "________________");
      setCookie("refresh_Token", response.refreshToken);
      dispatch(setAccessToken(response.accessToken));
      return <Link href="/" />; // 홈페이지로 이동
    } catch (error) {
      console.error("에러 발생:", error);
      // next auth 에 accesstoken 을 지운다
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
