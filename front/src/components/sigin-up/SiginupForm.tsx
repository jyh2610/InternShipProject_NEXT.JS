"use client";

import React, { useState } from "react";

import { Divider, Form } from "antd";

import DropDownForm from "./DropDownForm";
import EmailInput from "./EmailInput";
import FormItem from "./FormItem";
import SiginupBtn from "./SiginupBtn";

import type { UserType } from "@/constants/siginupFormData";

import { formData } from "@/constants/siginupFormData";

const layout = {
  // labelCol: { span: 4 },
  // wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
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
export interface formType {
  nickname: string;
  name: string;
  user_name: string;
  email: string;
  password: string;
  birthday: number | null;
  nation: number | null;
  sex: number;
}
const SiginupForm: React.FC = () => {
  const [form, setForm] = useState<formType>({
    nickname: "",
    name: "",
    user_name: "",
    email: "",
    password: "",
    birthday: null,
    nation: null,
    sex: 1,
  });

  const renderInput = (item: UserType) => {
    if (item.label === "생년월일" || item.label === "내·외국인" || item.label === "성별") {
      return <DropDownForm key={item.label} setForm={setForm} item={item} />;
    }
    if (item.label === "이메일") {
      return <EmailInput key={item.label} />;
    }
    // 나머지 경우는 FormItem을 렌더링
    return <FormItem form={form} setForm={setForm} key={item.label} name={item.name} label={item.label} msg={item.msg} btn={item.btn} btntext={item.btntext} />;
  };

  return (
    <div>
      <p>회원정보</p>
      <Divider />
      <Form className="my-auto" {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        {formData.map((item) => renderInput(item))}
        <SiginupBtn />
      </Form>
    </div>
  );
};

export default SiginupForm;
