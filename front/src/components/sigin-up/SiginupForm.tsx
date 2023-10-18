"use client";

// import React, { useState } from "react";

import { DatePicker, Divider, Form, Input, InputNumber, Select } from "antd";

// import { formData } from "@/constants/siginupFormData";

// import DropDownForm from "./DropDownForm";
// import EmailInput from "./EmailInput";
// import FormItem from "./FormItem";
import { nation, sex } from "@/constants/siginupFormData";

import EmailInput from "./EmailInput";
import SiginupBtn from "./SiginupBtn";

// import type { UserType } from "@/constants/siginupFormData";
// import type { formType } from "@/type/signUp";

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
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

const SiginupForm = () => {
  // const [form, setForm] = useState<formType>({
  //   nickname: "",
  //   name: "",
  //   user_name: "",
  //   email: "",
  //   password: "",
  //   birthday: null,
  //   nation: null,
  //   sex: 1,
  // });

  // const renderInput = (item: UserType) => {
  //   if (item.label === "생년월일" || item.label === "내·외국인" || item.label === "성별") {
  //     return <DropDownForm key={item.label} setForm={setForm} item={item} />;
  //   }
  //   if (item.label === "이메일") {
  //     return <EmailInput key={item.label} />;
  //   }
  //   // 나머지 경우는 FormItem을 렌더링
  //   return <FormItem form={form} setForm={setForm} key={item.label} name={item.name} label={item.label} msg={item.msg} btn={item.btn} btntext={item.btntext} />;
  // };

  return (
    <div>
      <p>회원정보</p>
      <Divider />
      <Form className="my-auto" {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        {/* {formData.map((item) => renderInput(item))} */}
        <Form.Item name={["user", "name"]} label="이름" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <EmailInput />
        <Form.Item name={["user", "age"]} label="나이" rules={[{ type: "number", min: 0, max: 99 }]}>
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="password"
          label="비밀번호"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="비밀번호확인"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("비밀번호가 일치하지 않습니다."));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item name={["user", "birthday"]} label="생년월일">
          <DatePicker />
        </Form.Item>
        <Form.Item name={["user", "nation"]} label="내외국">
          <Select placeholder="선택" options={nation} />
        </Form.Item>
        <Form.Item name={["user", "sex"]} label="성별">
          <Select placeholder="선택" options={sex} />
        </Form.Item>
        <SiginupBtn />
      </Form>
    </div>
  );
};

export default SiginupForm;
