import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Form, Input } from "antd";
import LoginBtn from "../auth/LoginBtn";

const SigninForm = () => {
  const onFinish = (values: any) => {
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
            name="아이디 입력"
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
            name="비밀번호 입력"
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
