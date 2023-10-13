import React from "react";

import { Form, Input } from "antd";

import type { UserType } from "@/constants/siginupFormData";

function FormItem({ name, label, msg }: UserType) {
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
  return (
    <Form.Item name={name} label={label} rules={validationRules}>
      <Input style={{ backgroundColor: "#F7F7F7" }} />
    </Form.Item>
  );
}

export default FormItem;
