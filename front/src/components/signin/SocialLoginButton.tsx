/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import { Form } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

import { getCookie, setCookie } from "@/API/cookie";
import { loginObj } from "@/constants/constants";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setAccessToken } from "@/redux/slicer/authSlice";

import SocialTitle from "./SocialTitle";

import type { Session } from "next-auth";

export interface CustomSession extends Session {
  server: { accessToken: string; refreshToken: string; success: boolean };
}

const SocialLoginButton = () => {
  const path = usePathname();
  const [type, setType] = useState("");
  const { data } = useSession();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const serverData = data as unknown as CustomSession;
    if (serverData) {
      setCookie("refresh_token", serverData.server?.refreshToken);
      dispatch(setAccessToken(serverData.server?.accessToken));
    }
  }, [data, type, path]);

  const router = useRouter();
  const accesstoken = useAppSelector((state) => state.auth.accessToken);
  const refreshToken: string | null = getCookie("refresh_token");

  useEffect(() => {
    (accesstoken || refreshToken) && router.push("/");
  }, [refreshToken, accesstoken, router]);

  const sociallogin = async (socialtype: string) => {
    setType(socialtype);
    await signIn(socialtype, { callbackUrl: "/signin" });
  };

  // if (data) {
  //   const serverData = data as unknown as CustomSession;
  //   setCookie("refresh_token", serverData.server.refreshToken);
  //   dispatch(setAccessToken(serverData.server.accessToken));
  //   signOut();
  // }

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
