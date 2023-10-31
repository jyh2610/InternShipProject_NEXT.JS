"use client";

import { useState } from "react";

import { ConfigProvider, Divider, Form } from "antd";
import { useRouter } from "next/navigation";

import { baseApi } from "@/API/api";
import { formatDate } from "@/lib/FormatData";
import { useAppDispatch } from "@/redux/hooks";
import { setUserName } from "@/redux/slicer/authSlice";

import Birth from "./Birth";
import EmailInput from "./EmailInput";
import Name from "./Name";
import Nickname from "./Nickname";
import Sex from "./Sex";
import SiginupBtn from "./SiginupBtn";
import TestPassword from "./TestPassword";
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
  const dispatch = useAppDispatch();
  const [emailValue, setEmailValue] = useState<emailType>({ id: "", domain: "", code: "" }); // 이메일 입력값을 상태로 관리
  const api = new baseApi();
  const [form] = Form.useForm<formType>();

  interface emailType {
    id: string;
    domain: string;
    code: string;
  }
  const nicknameValue = Form.useWatch("nickname", form);
  const user_nameValue = Form.useWatch("user_name", form);
  const email = `${emailValue.id}@${emailValue.domain}`;

  console.log(email, "ghyyydee");
  const route = useRouter();
  const validateForm = async () => {
    try {
      console.log(email, "ghyyydee");
      const { birthday, name, user_name, nickname, password, nation, sex } = await form.validateFields();

      const res = await api.post({
        url: "/sign/signup",
        body: { birthday: formatDate(birthday), name, user_name, nickname, password, nation, sex, email: emailValue.id + "@" + emailValue.domain },
      });
      if (res.success) {
        dispatch(setUserName(user_name));
        route.push("/signup/sign-complete");
      }
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
              colorBgContainer: "#F7F7F7",
              colorBorder: "transparent",
              colorPrimaryActive: "none",
              colorPrimaryBorderHover: "none",
              colorPrimaryHover: "none",
            },
            components: {
              Input: {
                colorBgContainer: "#F7F7F7",
                activeBorderColor: "none", // Input 체크 되었을 때 보더색상 변경
                hoverBorderColor: "none", // 마우스 올렸을 때 보더색상 변경
                colorBorder: "transparent",
                activeShadow: "none", // Input 체크 박스 그림자 변경
              },
            },
          }}
        >
          <Form form={form} colon={false} labelAlign="left" className="my-auto " name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Name />
            <Nickname nicknameValue={nicknameValue} />
            <UserID user={user_nameValue} />
            <EmailInput emailValue={emailValue} setEmailValue={setEmailValue} email={email} />
            {/* <Password /> */}
            <TestPassword />
            <Birth validateSelect={validateSelect} ko_KR={""} />
            <Sex validateSelect={validateSelect} ko_KR={""} />
            <SiginupBtn validateForm={validateForm} />
          </Form>
        </ConfigProvider>
      </div>
    </div>
  );
};

export default SiginupForm;
