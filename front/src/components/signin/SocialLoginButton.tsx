"use client";

import React, { useEffect, useState } from "react";

import NextAuth from "next-auth/next";
import { signIn, useSession } from "next-auth/react";

import { baseApi } from "@/API/api";
import { setCookie } from "@/API/cookie";
import { loginObj } from "@/constants/constants";
import { setAccessToken } from "@/redux/slicer/authSlice";

const SocialLoginButton = () => {
  const { data: session } = useSession();
  useEffect(() => {
    // `session` 콜백 함수를 사용하여 `session` 객체를 가져옵니다.
    // const session = NextAuth?.session();
    // `session` 객체에서 `token` 속성을 사용하여 토큰을 가져옵니다.
    // const accessToken = session.token.accessToken;
    // console.log(accessToken, "새로운 엑세스토큰 ?");
    // ...
  }, []);

  const api = new baseApi();
  // 소셜로그인
  const sociallogin = async (socialtype: string) => {
    try {
      await signIn(socialtype).then((res) => console.log(res));

      // Access Token 설정
      const socialaccesstoken = session?.accessToken;
      const url = `/sign/${socialtype}login`;
      // api.setHeaders(socialaccesstoken);
      const response = await api.post({
        url,
        options: {
          headers: {
            Authorization: `Bearer ${socialaccesstoken}`, // yourAccessToken은 실제 엑세스 토큰 값으로 대체해야 합니다.
          },
        },
      });
      setCookie("refresh_Token", response.refreshToken);
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
