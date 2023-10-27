import React from "react";

import { Form, Input } from "antd";

function Password() {
  return (
    <>
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
        <span className="text-[0.7rem] font-medium text-gray-400">(영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 8자~20자)</span>
      </Form.Item>
      <Form.Item
        name="confirm"
        dependencies={["password"]}
        label={<div className="password-check">비밀번호 확인</div>}
        wrapperCol={{ span: 8 }}
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
              return Promise.reject(new Error("The new password that you entered do not match!"));
            },
          }),
        ]}
        // rules={[
        //   {
        //     required: true,
        //     message: "비밀번호확인을 입력해 주세요.",
        //   },
        //   ({ getFieldValue }) => ({
        //     validator(_, value) {
        //       if (!value || getFieldValue("password") === value) {
        //         return Promise.resolve(); // 비밀번호와 비밀번호 확인이 같으면 유효성 검사를 통과
        //       }
        //       return Promise.reject(new Error("비밀번호가 다릅니다. 다시 한번 확인 하세요."));
        //     },
        //   }),
        // ]}
      >
        <Input.Password placeholder="*******" style={{ padding: "0.5rem 0.8rem" }} />
      </Form.Item>
    </>
  );
}

export default Password;
