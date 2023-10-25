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

  const clickCancel = () => {
    route.push("/");
  };

  return (
    <>
      <Form.Item>
        <Button
          style={{ padding: "1.6rem", lineHeight: 0 }}
          type="primary"
          htmlType="submit"
          onClick={clickLogin}
          className="btn btn-primary login-form-button mb-[0.5rem]"
          block
        >
          로그인
        </Button>
        <Button
          style={{ padding: "1.6rem", lineHeight: 0, border: "1px solid #d9d9d9", color: "#434343" }}
          type="link"
          htmlType="submit"
          onClick={clickCancel}
          className="btn btn-primary login-form-button"
          block
        >
          취소
        </Button>
      </Form.Item>
    </>
  );
};
export default LoginButton;
