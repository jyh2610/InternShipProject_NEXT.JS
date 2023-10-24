import React, { useState } from "react";

import { Button, Form, Input } from "antd";

import { duplicateTest } from "@/lib/signupApi";

function Nickname({ nicknameValue }: { nicknameValue: string }) {
  const [isNicknameValid, setIsNicknameValid] = useState(false);
  const response = async () => {
    try {
      const response = await duplicateTest("hasnickname", nicknameValue);

      if (response.success) {
        setIsNicknameValid(response.success);
      } else {
        console.error("Response is empty or missing 'success' property.");
      }
    } catch (error) {
      console.error("Error in onClick:", error);
    }
  };
  // setIsNicknameValid(res);
  return (
    <>
      <Form.Item
        hasFeedback={isNicknameValid}
        rules={[
          {
            required: true,
            message: "닉네임을 입력하세요!",
          },
          {
            validator: (_, value: string) => {
              if (value?.length <= 12 && typeof value === "string") {
                return Promise.resolve();
              }
              return Promise.reject(new Error("유효하지 않은 닉네임입니다."));
            },
          },
        ]}
        name="nickname"
        label="닉네임"
      >
        <div className="flex">
          <Input />
        </div>
      </Form.Item>
      <Button onClick={response}>중복검사</Button>
    </>
  );
}

export default Nickname;
