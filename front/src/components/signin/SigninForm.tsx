import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Form, Input } from "antd";
import LoginBtn from "../auth/LoginBtn";
import axios from "axios";
import LoginButton from "./LoginButton";
import FindButton from "./FindButton";
import LoginInput from "./LoginInput";

const SigninForm = () => {
  const login = (values: any) => {
    axios
      .post("http://192.168.0.18:3000/sign/signin", values)
      .then((response) => {
        // 로그인이 성공한 경우에 대한 처리
        console.log("로그인 성공:", response.data);
      })
      .catch((error) => {
        // 로그인이 실패한 경우에 대한 처리
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
            <p>SNS 계정으로 로그인</p>
            <LoginBtn />
          </Form.Item>
        </Form>
      </ConfigProvider>
    </div>
  );
};

export default SigninForm;
