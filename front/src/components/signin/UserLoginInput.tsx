"use client";
import { Form, Input } from "antd";
import React from "react";

const UserLoginInput = ({ item }: { item: any }) => {
  return (
    <Form.Item
      key={item.massage}
      name={item.name}
      rules={[
        {
          required: true,
          message:{item.key === 1}
        },
      ]}
    >
      <Input prefix={item.icon} placeholder={item.placeholder} />
    </Form.Item>
  );
};

export default UserLoginInput;
