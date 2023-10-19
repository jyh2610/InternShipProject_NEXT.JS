import React from "react";

import { Form, Input } from "antd";

function UserID() {
  return (
    <Form.Item
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
      name="user_name"
      label="아이디"
    >
      <Input />
    </Form.Item>
  );
}

export default UserID;