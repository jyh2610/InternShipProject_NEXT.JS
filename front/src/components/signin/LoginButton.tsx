import React, { useCallback } from "react";

import { Button, Form } from "antd";
import { useRouter } from "next/navigation";

import { loginHandler } from "@/lib/signinApi";

const LoginButton = ({ user_name, password }: { user_name: string; password: string }) => {
  const route = useRouter();
  const clickLogin = useCallback(async () => {
    await loginHandler(user_name, password);
    route.push("/");
  }, []);
  return (
    <>
      <Form.Item>
        <Button style={{ padding: "1.7rem 16px", lineHeight: 0 }} type="primary" htmlType="submit" onClick={clickLogin} className="login-form-button" block>
          로그인
        </Button>
      </Form.Item>
    </>
  );
};

export default LoginButton;
