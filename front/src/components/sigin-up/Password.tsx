import React from "react";

import { Form, Input } from "antd";

function Password() {
  return (
    <>
      <Form.Item
        name="password"
        label="비밀번호"
        rules={[
          {
            required: true,
            message: "Please input your password!",
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
        <Input.Password autoComplete="new-password" />
      </Form.Item>
      <Form.Item
        name="checkPassword"
        label="비밀번호확인"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("비밀번호가 일치하지 않습니다."));
            },
          }),
        ]}
      >
        <Input.Password autoComplete="new-password" />
      </Form.Item>
    </>
  );
}

export default Password;
