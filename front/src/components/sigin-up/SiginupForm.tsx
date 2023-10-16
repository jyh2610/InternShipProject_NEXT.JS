"use client";

import React, { useState } from "react";

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

  console.log(form);

  return (
    <>
      <Form style={{ width: "800px" }} {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        {formData.map((item: UserType) => {
          return (
            <FormItem form={form} setForm={setForm} key={item.label} name={item.name} label={item.label} msg={item.msg} btn={item.btn} btntext={item.btntext} />
          );
        })}
        <SiginupBtn />
      </Form>
    </>
  );
};

export default SiginupForm;
