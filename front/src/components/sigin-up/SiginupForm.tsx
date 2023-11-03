"use client";

import { ConfigProvider, Form } from "antd";
import { useRouter } from "next/navigation";

import Birth from "./Birth";
import Name from "./Name";
import Nickname from "./Nickname";
import Sex from "./Sex";
import SiginupBtn from "./SiginupBtn";
import TestPassword from "./TestPassword";
import UserID from "./UserID";

import type { formType } from "@/type/signUp";

import { baseApi } from "@/API/api";
import { formatDate } from "@/lib/FormatData";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setUserName } from "@/redux/slicer/authSlice";
import EmailNew from "./EmailNew";
import { useEffect, useRef, useState } from "react";

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
  const [emailbtn, setEmailbtn] = useState(false);
  const [confirmbtn, setConfirmbtn] = useState(false);
  const [resSuccess, setResSuccess] = useState("");
  const checked = useAppSelector((state) => state.auth.checkedthird);
  //
  const dispatch = useAppDispatch();
  const api = new baseApi();
  const [form] = Form.useForm<formType>();

  const nicknameValue = Form.useWatch("nickname", form);
  const user_nameValue = Form.useWatch("user_name", form);

  const emailId = Form.useWatch("emailId", form); // 이메일 아이디 부분 값
  const emailDomain = Form.useWatch("emailDomain", form); // 도메인 부분 값

  const fullEmail = `${emailId}@${emailDomain}`; //
  console.log(emailId, "사인업폼 ");
  const route = useRouter();
  // const email = `${emailValue.id}@${emailValue.domain}`;
  const validateForm = async () => {
    if (resSuccess) {
      try {
        const { birthday, name, user_name, nickname, password, nation, sex } = await form.validateFields();
        console.log("asdasd");
        // console.log(email, "_______sd");
        const sendingData = { birthday: formatDate(birthday), name, user_name, nickname, password, nation, sex, email: fullEmail };
        // console.log(email, "ghyyydee");
        const res = await api.post({
          url: "/sign/signup",
          body: sendingData,
        });
        if (res.success) {
          dispatch(setUserName(name));
          route.push("/signup/sign-complete");
        }
      } catch (errorInfo) {
        console.log("Validation failed:", errorInfo);
      }
    } else {
      alert(" 인증 및 중복확인을 완료해야 합니다.");
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
  const alertShown = useRef(false);
  useEffect(() => {
    if (!checked && !alertShown.current) {
      alertShown.current = true; // Set the ref to true to prevent further alerts
      alert("필수 동의 항목을 체크해주세요");
      route.push("/signup/provideinfo");
    }
  }, [checked]);
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
            {/* <EmailInput emailValue={emailValue} setEmailValue={setEmailValue} email={email} /> */}
            <EmailNew
              setResSuccess={setResSuccess}
              resSuccess={resSuccess}
              emailformValue={fullEmail}
              confirmbtn={confirmbtn}
              setConfirmbtn={setConfirmbtn}
              emailbtn={emailbtn}
              setEmailbtn={setEmailbtn}
            />
            <TestPassword />
            <Birth validateSelect={validateSelect} ko_KR={""} />
            <Sex validateSelect={validateSelect} ko_KR={""} />
            <SiginupBtn validateForm={validateForm} />
          </Form>
        </ConfigProvider>
      </div>
    </div>
  );
  // } else {
  //   alert("필수 동의 항목을 체크해주세요");
  //   return route.push("/signup/provideinfo");
  // }
};

export default SiginupForm;
