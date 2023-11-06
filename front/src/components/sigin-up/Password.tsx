import React from "react";

import { Form, Input } from "antd";

function Password() {
  return (
    <Form.Item
      name="password"
      label="비밀번호"
      labelCol={{ span: 1 }}
      wrapperCol={{ span: 8 }}
      rules={[
        {
          required: true,
          message: "영문대/소문자, 숫자, 특수문자 중 2가지 이상 조합하세요",
        },
        {
          validator: (_, value: string) => {
            const pwValidation = new RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,20}$");
            if (pwValidation.test(value)) {
              return Promise.resolve();
            }
            return Promise.reject(new Error("사용불가! 영문대/소문자, 숫자, 특수문자 중 2가지 이상 조합하세요"));
          },
        },
      ]}
      hasFeedback
    >
      <Input.Password placeholder="*******" style={{ padding: "0.5rem 0.8rem" }} />
    </Form.Item>
  );
}

export default Password;
