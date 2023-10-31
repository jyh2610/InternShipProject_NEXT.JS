import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession, signOut } from "next-auth/react";
import { getCookie, setCookie } from "@/API/cookie";
import { loginObj } from "@/constants/constants";
import { Form } from "antd";
import SocialTitle from "./SocialTitle";
import { Session } from "next-auth";
import { useAppSelector } from "@/redux/hooks";
import { baseApi } from "@/API/api";

export interface CustomSession extends Session {
  accessToken: string;
  refreshToken: string;
}

const SocialLoginButton = () => {
  const api = new baseApi();
  const [type, setType] = useState("");
  const { data } = useSession();
  //session에 저장 후 useEffect로 서버에 전달
  console.log(data, "<><<<<<<<<<<<<<<<<Data");
  useEffect(() => {
    if (data) {
      const url = `/sign/${type}login`;

      const res = api.post({
        url,
        options: {
          headers: {
            Authorization: `Bearer ${data?.accessToken}`,
          },
        },
      });
    }
  }, [data]);
  const router = useRouter();
  const accesstoken = useAppSelector((state) => state.auth.accessToken);
  const refreshToken: string | null = getCookie("refresh_token");
  useEffect(() => {
    (accesstoken || refreshToken) && router.push("/");
  }, [refreshToken, accesstoken]);

  const sociallogin = (socialtype: string) => {
    setType(socialtype);
    signIn(socialtype, { callbackUrl: "/signin" });
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
