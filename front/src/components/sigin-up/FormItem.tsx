import React from "react";

import { Form, Input } from "antd";

interface FormProps {
  name: [string, string];
  label: string;
}
function FormItem({ name, label }: FormProps) {
  return (
    <Form.Item name={name} label={label} rules={[{ message: "hi", whitespace: true }]}>
      <Input />
    </Form.Item>
  );
}

export default FormItem;
