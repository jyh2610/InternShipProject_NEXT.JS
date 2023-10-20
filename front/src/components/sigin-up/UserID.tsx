import React, { useState } from "react";

import { Button, Form, Input } from "antd";

import { duplicateTest } from "@/lib/signupApi";

function UserID({ user }: { user: string }) {
  const [isUserIdValid, setIsUserIdValid] = useState(false);

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
      >
        <Input />
      </Form.Item>
      <Button
        onClick={() =>
          duplicateTest("hasid", user).then((res) => {
            // console.log(res, "{{{{{{{");
            setIsUserIdValid(res);
          })
        }
      >
        중복검사
      </Button>
    </div>
  );
}

export default UserID;
