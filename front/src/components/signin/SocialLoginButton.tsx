"use client";

import React from "react";

import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

import { setCookie } from "@/API/cookie";
import { loginObj } from "@/constants/constants";
import { Form } from "antd";
import SocialTitle from "./SocialTitle";

const SocialLoginButton = () => {
  const { data: session } = useSession();
  console.log(session);

  const route = useRouter();
  // 소셜로그인
  const sociallogin = async (socialtype: string) => {
    await signIn(socialtype);
    setCookie("refresh_token", session?.accessToken);
    route.push("/");
  };

  return (
    <Form.Item>
      <SocialTitle />
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
    </Form.Item>
  );
};

export default SocialLoginButton;
