import React from "react";

import { Form, Select } from "antd";

import { nation } from "@/constants/siginupFormData";

import type { ValidProps } from "./Birth";

function Nation({ validateSelect }: ValidProps) {
  return (
    <Form.Item
      rules={[
        {
          validator: validateSelect,
        },
      ]}
      name="nation"
      label="내외국"
    >
      <Select placeholder="선택" options={nation} />
    </Form.Item>
  );
}

export default Nation;
