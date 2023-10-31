import React from "react";

import { Form, Input } from "antd";
import { useAppDispatch } from "@/redux/hooks";
import { setUserName } from "@/redux/slicer/authSlice";

function Name(this: any) {
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
      name={"name"}
      label={<div className="label-tit">이름</div>}
      labelCol={{ span: 1 }}
      wrapperCol={{ span: 5 }}
    >
      <Input style={{ padding: "0.5rem 0.8rem" }} />
    </Form.Item>
  );
}

export default Name;
