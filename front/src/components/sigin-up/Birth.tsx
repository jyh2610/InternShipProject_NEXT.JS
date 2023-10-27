import React from "react";
import { DatePicker, Form } from "antd";
import koKR from "antd/lib/locale/ko_KR";
export interface ValidProps {
  validateSelect: (_: unknown, value: string | number) => Promise<void>;
}
function Birth({ validateSelect }: ValidProps) {
  return (
    <Form.Item
      rules={[
        {
          required: true,
          message: "생년월일을 선택해주세요.",
        },
        {
          validator: validateSelect,
        },
      ]}
      name="birthday"
      label="생년월일"
    >
      <DatePicker placeholder="생년월일" style={{ cursor: "pointer", width: "15%", padding: "0.5rem 0.8rem" }} />
    </Form.Item>
  );
}

export default Birth;
