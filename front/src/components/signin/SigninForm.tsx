"use client";
import React, { useCallback } from "react";

import { ConfigProvider, Form, Input } from "antd";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import FindButton from "./FindButton";
import LoginButton from "./LoginButton";

import SocialLoginButton from "./SocialLoginButton";

import type { formType } from "@/type/signUp";

import { setAccessToken } from "@/redux/slicer/authSlice";
import UserLoginInput from "./UserLoginInput";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

const SigninForm = () => {
  const accessToken = useAppSelector((state) => state.auth.accessToken);
  const dispatch = useAppDispatch();
  const [form] = Form.useForm<formType>();

  const userName = Form.useWatch("user_name", form);
  const password = Form.useWatch("password", form);

  const onFinish = useCallback(() => {
    dispatch(setAccessToken(accessToken));
  }, []);

  const inputdata = [
    {
      key: 0,
      name: "user_name",
      icon: <UserOutlined className="site-form-item-icon h-[3rem]" />,
      massage: "아이디를 입력해 주세요.",
      placeholder: "아이디 입력",
    },
    {
      key: 1,
      name: "password",
      icon: <LockOutlined className="site-form-item-icon h-[3rem]" />,
      massage: "비밀번호를 입력해주세요",
      placeholder: "비밀번호 입력",
    },
  ];

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#26AF66",
          colorLink: "gray",
          borderRadius: 0,
        },
      }}
    >
      <Form
        form={form}
        name="normal_login"
        className="login-form text-center"
        style={{ width: "100%" }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <UserLoginInput item={inputdata[0]} />
        <UserLoginInput item={inputdata[1]} />
        <LoginButton user_name={userName} password={password} />
        <FindButton />
        <SocialLoginButton />
      </Form>
    </ConfigProvider>
  );
};

export default SigninForm;
