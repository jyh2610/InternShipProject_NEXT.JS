import React, { useState } from "react";

import { Button, Form, Input } from "antd";

import { duplicateTest } from "@/lib/signupApi";

function Nickname({ nicknameValue }: { nicknameValue: string }) {
  const [isNicknameValid, setIsNicknameValid] = useState("");

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
          {/* {isNicknameValid ? <span className="text-xs">이미 사용하고 있는 아이디입니다</span> : <span className="text-xs">사용가능한 아이디 입니다</span>} */}
        </div>
      </Form.Item>
      <Button
        onClick={() =>
          duplicateTest("hasnickname", nicknameValue).then((res) => {
            // console.log(res, "{{{{{{{{{{{{{{{");
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
