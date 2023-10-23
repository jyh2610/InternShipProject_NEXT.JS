import React from "react";

import { Button } from "antd";
import { useRouter } from "next/navigation";

import { loginHandler } from "@/lib/signinApi";

const LoginButton = ({ user_name, password }: { user_name: string; password: string }) => {
  const route = useRouter();
  const clickLogin = async () => {
    await loginHandler(user_name, password);
    route.push("/");
  };
  return (
    <>
      <Button type="primary" style={{ padding: "1.7rem 16px", lineHeight: 0 }} htmlType="submit" onClick={clickLogin} className="login-form-button" block>
        로그인
      </Button>
    </>
  );
};

export default LoginButton;
