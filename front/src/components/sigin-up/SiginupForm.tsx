"use client";

import React from "react";

import { Form } from "antd";

import FormItem from "./FormItem";
import SiginupBtn from "./SiginupBtn";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
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

const SiginupForm: React.FC = () => (
  <Form {...layout} name="nest-messages" onFinish={onFinish} style={{ maxWidth: 600 }} validateMessages={validateMessages}>
    <FormItem name={["user", "name"]} label="이름" />
    <FormItem name={["user", "name"]} label="닉네임" />
    <FormItem name={["user", "name"]} label="아이디" />
    <FormItem name={["user", "email"]} label="이메일" />
    <FormItem name={["user", "name"]} label="비밀번호" />
    <FormItem name={["user", "name"]} label="생일" />
    <FormItem name={["user", "name"]} label="나라" />
    <FormItem name={["user", "name"]} label="성별" />
    <SiginupBtn />
  </Form>
);

export default SiginupForm;
