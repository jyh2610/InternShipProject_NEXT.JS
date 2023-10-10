"use client";
import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import SigninTitle from "@/components/signin/SigninTitle";
const SignIn = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="pt-[11rem]">
      <SigninTitle />
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "아이디 입력",
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
          <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            로그인
          </Button>
        </Form.Item>
        <Form.Item>
          <a className="login-form-forgot" href="">
            아이디 찾기
          </a>
          <a className="login-form-forgot" href="">
            비밀번호 찾기
          </a>
          <a href="">회원가입</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignIn;
