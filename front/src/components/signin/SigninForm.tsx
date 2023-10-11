import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Form, Input } from "antd";
import LoginBtn from "../auth/LoginBtn";
import axios from "axios";

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
          className="login-form"
          style={{ width: "20%" }}
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
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="아이디 입력" />
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
            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="비밀번호 입력" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" block>
              로그인
            </Button>
          </Form.Item>
          <Form.Item>
            <a className="login-form-forgot" href="">
              아이디 찾기 |
            </a>
            <a className="login-form-forgot" href="">
              비밀번호 찾기 |
            </a>
            <a href="">회원가입</a>
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
