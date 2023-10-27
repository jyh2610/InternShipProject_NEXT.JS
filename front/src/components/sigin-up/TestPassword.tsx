import { Form, Input } from "antd";

import React, { useEffect } from "react";

const TestPassword = () => {
  const pwValidation = new RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,20}$");

  return (
    <div>
      <Form.Item
        name="password"
        label="비밀번호"
        labelCol={{ span: 1 }}
        wrapperCol={{ span: 8 }}
        rules={[
          {
            required: true,
            message: "비밀번호를 입력해 주세요.",
          },
          {
            validator: (_, value) => {
              if (pwValidation.test(value)) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("사용불가! 영문 대소문자, 숫자, 특수문자 중 2가지 이상 조합하세요"));
            },
          },
        ]}
        hasFeedback
      >
        <Input.Password placeholder="*******" style={{ padding: "0.5rem 0.8rem" }} />
      </Form.Item>
      <Form.Item
        name="confirm"
        label={<div className="password-check">비밀번호 확인</div>}
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "비밀번호를 입력해 주세요",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("비밀번호와 동일하지 않습니다."));
            },
          }),
        ]}
      >
        <Input.Password placeholder="*******" style={{ padding: "0.5rem 0.8rem" }} />
      </Form.Item>
    </div>
  );
};

export default TestPassword;
