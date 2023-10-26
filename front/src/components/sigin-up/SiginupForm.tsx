"use client";

import { ConfigProvider, Divider, Form } from "antd";

import { baseApi } from "@/API/api";
import { formatDate } from "@/lib/FormatData";

import Birth from "./Birth";
import EmailInput from "./EmailInput";
import Name from "./Name";
import Nickname from "./Nickname";
import Password from "./Password";
import Sex from "./Sex";
import SiginupBtn from "./SiginupBtn";
import UserID from "./UserID";

import type { formType } from "@/type/signUp";

const validateMessages = {
  required: "${label} is required!",
  types: {
    name: "${label}은 12글자 이하여야합니다.",
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const onFinish = (values: any) => {
  console.log(values);
};

const SiginupForm = () => {
  const api = new baseApi();
  const [form] = Form.useForm<formType>();

  const nicknameValue = Form.useWatch("nickname", form);
  const user_nameValue = Form.useWatch("user_name", form);

  const validateForm = async () => {
    try {
      const { birthday, name, user_name, nickname, password, nation, sex } = await form.validateFields();
      await api.post({
        url: "/sign/signup",
        body: { birthday: formatDate(birthday), name, user_name, nickname, password, nation, sex, email: "jogg4177@naver.com" },
      });
    } catch (errorInfo) {
      console.log("Validation failed:", errorInfo);
    }
  };

  const validateSelect = (_: unknown, value: string | number) => {
    return new Promise<void>((resolve, reject) => {
      if (value === undefined) {
        reject("선택해야 합니다.");
      } else {
        resolve();
      }
    });
  };

  return (
    <div className="">
      <div className="">
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#26AF66",
              colorLink: "#000",
              borderRadius: 2,
            },
            components: {
              Input: {
                colorBgContainer: "#F7F7F7",
                activeBorderColor: "none", // Input 체크 되었을 때 보더색상 변경
                hoverBorderColor: "none", // 마우스 올렸을 때 보더색상 변경
                colorBorder: "transparent",
                activeShadow: "none",
              },
            },
          }}
        >
          <Form form={form} colon={false} labelAlign="left" className="my-auto " name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Name />
            <Nickname nicknameValue={nicknameValue} />
            <UserID user={user_nameValue} />
            <EmailInput />
            <Password />
            <Birth validateSelect={validateSelect} />
            <Sex validateSelect={validateSelect} />
            <SiginupBtn validateForm={validateForm} />
          </Form>
        </ConfigProvider>
      </div>
    </div>
  );
};

export default SiginupForm;
