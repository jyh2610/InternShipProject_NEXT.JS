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
          required: true,
          message: "YYYY-MM-DD",
        },
        {
          validator: validateSelect,
        },
      ]}
      name="birthday"
      label="생년월일"
    >
      <DatePicker placeholder="YYYY-MM-DD" style={{ cursor: "pointer", width: "15%", padding: "0.5rem 0.8rem" }} />
    </Form.Item>
  );
}

export default Birth;
