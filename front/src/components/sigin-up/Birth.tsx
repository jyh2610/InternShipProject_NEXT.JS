import React from "react";

import { DatePicker, Form } from "antd";

export interface ValidProps {
  validateSelect: (_: unknown, value: string | number) => Promise<void>;
}

function Birth({ validateSelect }: ValidProps) {
  return (
    <Form.Item
      rules={[
        {
          validator: validateSelect,
        },
      ]}
      name="birthday"
      label="생년월일"
    >
      <DatePicker />
    </Form.Item>
  );
}

export default Birth;
