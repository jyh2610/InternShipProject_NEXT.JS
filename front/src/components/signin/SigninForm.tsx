import React from "react";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { ConfigProvider, Form, Input } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";

import { baseApi } from "@/API/api";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setAccessToken, setUserName } from "@/redux/slicer/authSlice";

const SigninForm = () => {
  const route = useRouter();
  const api = new baseApi();
  const accessToken = useAppSelector((state) => state.auth.accessToken);
  const dispatch = useAppDispatch();
  const login = async (values: any) => {
    try {
      const res = await api.post({
        url: "/sign/signin",
        options: {
          headers: {
            Authorization: "Bearerdfweci", // yourAccessToken은 실제 엑세스 토큰 값으로 대체해야 합니다.
          },
        },
        body: values,
      });
      const accessToken = res.accessToken;
      dispatch(setAccessToken(accessToken));
      setCookie("refresh_Token", res.refreshToken);
      dispatch(setUserName(res.name));

      // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      route.push("/");
    } catch (error) {
      console.error("로그인 실패:", error);
    }
  };

  const onFinish = (values: any) => {
    login(values);
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
