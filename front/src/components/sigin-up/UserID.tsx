import React, { useState } from "react";

import { Button, Form, Input } from "antd";

import { duplicateTest } from "@/lib/signupApi";

function UserID({ user }: { user: string }) {
  const [isUserIdValid, setIsUserIdValid] = useState(false);

  const response = async () => {
    try {
      const response = await duplicateTest("hasid", user);

      if (response) {
        setIsUserIdValid(response.success);
      } else {
        console.error("Response is empty or missing 'success' property.");
      }
    } catch (error) {
      console.error("Error in onClick:", error);
    }
  };

  return (
    <div>
      <Form.Item
        hasFeedback={isUserIdValid}
        rules={[
          {
            required: true,
            message: "아이디를 입력하세요!",
          },
          {
            validator: (_, value: string) => {
              if (value?.length <= 12 && typeof value === "string") {
                return Promise.resolve();
              }
              return Promise.reject(new Error("아이디는 영문소문자 또는 숫자 4~16자로 입력해 주세요. (영문소문자/숫자, 4~16자)"));
            },
          },
        ]}
        name="user_name"
        label="아이디"
        labelCol={{ span: 1 }}
        wrapperCol={{ span: 7 }}
      >
        <div className="flex gap-[0.5rem]">
          <Input style={{ padding: "0.5rem 0.8rem" }} />
          <Button style={{ height: "100%", padding: "0.5rem 1.2rem" }} onClick={response}>
            중복확인
          </Button>
        </div>
      </Form.Item>
    </div>
  );
}

export default UserID;
