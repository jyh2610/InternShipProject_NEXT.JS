import { Form, Input } from "antd";
import React from "react";

const PasswordConfirm = () => {
  return (
    <Form.Item
      name="confirm"
      label={<div className="password-check">비밀번호 확인</div>}
      dependencies={["password"]}
      wrapperCol={{ span: 8 }}
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
  );
};

export default PasswordConfirm;
