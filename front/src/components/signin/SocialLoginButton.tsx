import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { getCookie, setCookie } from "@/API/cookie";
import { loginObj } from "@/constants/constants";
import { Form } from "antd";
import SocialTitle from "./SocialTitle";
import { Session } from "next-auth";
import { useAppSelector } from "@/redux/hooks";

export interface CustomSession extends Session {
  accessToken: string;
  refreshToken: string;
}

const SocialLoginButton = () => {
  const { data: session, update } = useSession();
  const router = useRouter();
  const accesstoken = useAppSelector((state) => state.auth.accessToken);
  const refreshToken: string | null = getCookie("refresh_token");
  useEffect(() => {
    (accesstoken || refreshToken) && router.push("/");
  }, [refreshToken, accesstoken]);

  const sociallogin = async (socialtype: string) => {
    update();
    await signIn(socialtype);
    console.log(session);

    if (session) {
      const data = session as unknown as CustomSession;
      console.log(data.refreshToken);
      setCookie("refresh_token", data?.refreshToken);
    }
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
