import { Form, Input } from "antd";
import React from "react";

const EmailDomain = () => {
  return (
    <div>
      <Form.Item
        name="emailDomain" // 두 번째 Form.Item
        label=""
        rules={[
          { required: true, message: "도메인을 입력해 주세요." },
          {
            validator: (_, value) => {
              if (value.length > 2 && value.includes(".")) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("유효하지 않은 이메일 입니다."));
            },
          },
        ]}
      >
        <Input style={{ padding: "0.5rem 0.2rem" }} />
      </Form.Item>
    </div>
  );
};

export default EmailDomain;
