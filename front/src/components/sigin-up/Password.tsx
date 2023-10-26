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
            message: "비밀번호를 입력해 주세요.",
          },
          {
            validator: (_, value: string) => {
              const pwValidation = new RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,20}$");
              if (pwValidation.test(value)) {
                return Promise.resolve();
              }
              return Promise.reject(new Error(" "));
            },
          },
        ]}
        hasFeedback
      >
        <Input.Password placeholder="*******" autoComplete="new-password" />
        <span className="text-[0.7rem] font-bold text-gray-400">(영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 8자~20자)</span>
      </Form.Item>
      <Form.Item
        name="checkPassword"
        label={<div className="password-check">비밀번호 확인</div>}
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "비밀번호확인을 입력해 주세요.",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("비밀번호가 다릅니다. 다시 한번 확인 하세요."));
            },
          }),
        ]}
      >
        <Input.Password placeholder="*******" autoComplete="new-password" />
      </Form.Item>
    </>
  );
}

export default Password;
