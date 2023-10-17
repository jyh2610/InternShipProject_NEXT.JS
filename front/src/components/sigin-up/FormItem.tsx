import React, { useState } from "react";

import { Button, Form, Input } from "antd";

import { baseApi } from "@/API/api";

import type { formType } from "./SiginupForm";
import type { UserType } from "@/constants/siginupFormData";

interface Props extends UserType {
  form: formType;
  setForm: Function;
}
function FormItem({ name, label, msg, btn, btntext, form, setForm }: Props) {
  const api = new baseApi();
  const key = name[1];
  const [input, setInput] = useState<string | number>();
  const validationRules = [
    {
      required: false,
      message: "This field is required", // 필드가 비어있을 때 표시할 메시지
    },
    {
      pattern: /^[a-zA-Z0-9]*$/,
      message: msg[0], // 패턴이 맞지 않을 때 표시할 메시지
    },
  ];
  const FormHandler = (e: { target: { name: string; value: string | number } }) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setInput(e.target.value);
  };

  const endPointCreate = () => {
    if (key === "nickname") {
      return "hasnickname";
    }
    if (key === "user_name") {
      return "hasid";
    }
    if (key === "email") {
      return "verifycode";
    }
    return null;
  };

  const vaildateHandler = async () => {
    const endPoint = endPointCreate();
    console.log(endPointCreate());

    await api.post({
      url: `/sign/${endPoint}`,
      body: {
        [key]: input,
      },
    });
  };

  return (
    <Form.Item name={name} label={label} rules={validationRules}>
      <div className="flex">
        <Input name={name[1]} onChange={FormHandler} style={{ backgroundColor: "#F7F7F7" }} />
        {btn && <Button onClick={vaildateHandler}>{btntext}</Button>}
      </div>
    </Form.Item>
  );
}

export default FormItem;
