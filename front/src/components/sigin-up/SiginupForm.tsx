"use client";

import React from "react";

import { Form } from "antd";

import { formData } from "@/constants/siginupFormData";

import FormItem from "./FormItem";
import SiginupBtn from "./SiginupBtn";

import type { UserType } from "@/constants/siginupFormData";

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
    {formData.map((item: UserType) => {
      return <FormItem key={item.label} name={item.name} label={item.label} msg={item.msg} />;
    })}
    <SiginupBtn />
  </Form>
);

export default SiginupForm;
