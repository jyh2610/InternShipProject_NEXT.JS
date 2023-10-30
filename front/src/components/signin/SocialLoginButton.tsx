import React from "react";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import { setCookie } from "@/API/cookie";
import { loginObj } from "@/constants/constants";
import { Form } from "antd";
import SocialTitle from "./SocialTitle";
import { Session } from "next-auth";
import { baseApi } from "@/API/api";

interface CustomSession extends Session {
  token: {
    accessToken: string;
    refreshToken: string;
  };
}

const SocialLoginButton = () => {
  const { data: session } = useSession();
  const api = new baseApi();
  // const route = useRouter();

  // 소셜로그인
  const sociallogin = async (socialtype: string) => {
    const url = `/sign/${socialtype}login`;
    const res: CustomSession = await api.post({
      url,
      options: {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      },
    });
    console.log(res);

    setCookie("refreshToken", res.token.refreshToken);
  };

  return (
    <Form.Item>
      <SocialTitle />
      <div className="flex justify-center gap-[2rem]">
        {loginObj.map((data) => (
          <img
            className="sns-icon"
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
