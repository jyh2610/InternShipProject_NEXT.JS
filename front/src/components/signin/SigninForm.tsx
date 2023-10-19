import React from "react";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { ConfigProvider, Form, Input } from "antd";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setAccessToken } from "@/redux/slicer/authSlice";

import FindButton from "./FindButton";
import LoginButton from "./LoginButton";
import SocialLoginButton from "./SocialLoginButton";

const SigninForm = () => {
  const accessToken = useAppSelector((state) => state.auth.accessToken);
  const dispatch = useAppDispatch();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    dispatch(setAccessToken(accessToken));
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
                message: "아이디를 입력해 주세요.",
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon h-[2.75rem]" />} placeholder="아이디 입력" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "비밀번호를 입력해주세요 ",
              },
            ]}
          >
            <Input prefix={<LockOutlined className="site-form-item-icon h-[2.75rem]" />} type="password" placeholder="비밀번호 입력" />
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
