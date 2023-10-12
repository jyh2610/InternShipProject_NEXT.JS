import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { ConfigProvider, Form, Input } from "antd";
import LoginButton from "./LoginButton";
import FindButton from "./FindButton";
import { baseApi } from "@/API/api";
import SocialLoginButton from "./SocialLoginButton";
import Logo from "../Logo";

const SigninForm = () => {
  const api = new baseApi();
  const login = (values: any) => {
    api
      .post({ url: "/sign/signin", body: values })
      .then((response) => {
        console.log("로그인 성공:", response);
      })
      .catch((error) => {
        console.error("로그인 실패:", error);
      });
  };

  const onFinish = (values: any) => {
    login(values);
    console.log("Received values of form: ", values);
  };

  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#26AF66",
            borderRadius: 2,
          },
        }}
      >
        <Form
          name="normal_login"
          className="login-form text-center"
          style={{ width: "23.3125rem" }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="user_name"
            rules={[
              {
                required: true,
                message: "아이디 입력",
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon h-[2.75rem]" />} placeholder="아이디 입력" disabled />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "비밀번호 입력",
              },
            ]}
          >
            <Input prefix={<LockOutlined className="site-form-item-icon h-[2.75rem]" />} type="password" placeholder="비밀번호 입력" disabled />
          </Form.Item>
          <Form.Item>
            <LoginButton />
          </Form.Item>
          <Form.Item className="text-center">
            <FindButton />
          </Form.Item>
          <Form.Item>
            <SocialLoginButton />
          </Form.Item>
        </Form>
      </ConfigProvider>
    </div>
  );
};

export default SigninForm;
