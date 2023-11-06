import React, { useEffect, useState } from "react";

import { Button, Form, Input } from "antd";

import { duplicateTest } from "@/lib/signupApi";

function Nickname({ nicknameValue }: { nicknameValue: string }) {
  const [isNicknameValid, setIsNicknameValid] = useState(false);

  useEffect(() => {
    setIsNicknameValid(false);
  }, [nicknameValue]);

  const response = async () => {
    try {
      const response = await duplicateTest("hasnickname", nicknameValue);

      if (response?.success) {
        setIsNicknameValid(response.success);
      } else if (response?.success === false) {
        setIsNicknameValid(response.success);
        alert("중복된 닉네임 입니다.");
        console.error("중복된 닉네임 입니다.");
      }
    } catch (error) {
      console.error("Error in onClick:", error);
    }
  };

  return (
    <Form.Item
      hasFeedback={isNicknameValid}
      rules={[
        {
          required: true,
          message: "닉네임을 입력해 주세요.",
        },
        {
          validator: (_, value: string) => {
            if (value?.length <= 12) {
              return Promise.resolve("");
            }
            return Promise.reject(new Error("유효하지 않은 닉네임입니다. "));
          },
        },
      ]}
      name="nickname"
      label="닉네임"
      labelCol={{ span: 1 }}
      wrapperCol={{ span: 7 }}
    >
      <div className="flex gap-[0.5rem]">
        <Input placeholder="12자 이하로 입력해 주세요." style={{ padding: "0.5rem 0.8rem" }} />
        <Button style={{ height: "100%", padding: "0.5rem 1.2rem" }} onClick={response}>
          중복확인
        </Button>
      </div>
    </Form.Item>
  );
}

export default Nickname;
