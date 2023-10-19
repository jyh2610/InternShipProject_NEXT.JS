import React, { useState } from "react";

import { Button, Form, Input } from "antd";

import { duplicateTest } from "@/lib/signupApi";

function Nickname({ nicknameValue }: { nicknameValue: string }) {
  const [isNicknameValid, setIsNicknameValid] = useState(false);

  return (
    <>
      <Form.Item
        hasFeedback={isNicknameValid}
        rules={[
          {
            required: true,
            message: "이름을 입력하세요!",
          },
          {
            validator: (_, value: string) => {
              if (value?.length <= 12 && typeof value === "string") {
                return Promise.resolve();
              }
              return Promise.reject(new Error("이름은 12자 이하이거나 문자여야합니다."));
            },
          },
        ]}
        name="nickname"
        label="닉네임"
      >
        <Input />
      </Form.Item>
      <Button
        onClick={() =>
          duplicateTest("hasnickname", nicknameValue).then((res) => {
            console.log(res, "{{{{{{{{{{{{{{{");
            setIsNicknameValid(res);
          })
        }
      >
        중복검사
      </Button>
    </>
  );
}

export default Nickname;
