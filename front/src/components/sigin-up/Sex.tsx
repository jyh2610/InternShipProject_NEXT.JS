import React from "react";

import { Form, Select } from "antd";

import { sex } from "@/constants/siginupFormData";

import type { ValidProps } from "./Birth";

function Sex({ validateSelect }: ValidProps) {
  return (
    <Form.Item
      rules={[
        {
          validator: validateSelect,
        },
      ]}
      name="sex"
      label="성별"
    >
      <Select placeholder="선택" options={sex} />
    </Form.Item>
  );
}

export default Sex;
