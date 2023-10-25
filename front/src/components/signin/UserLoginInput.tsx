"use client";
import { Form, Input } from "antd";
import React from "react";

const UserLoginInput = ({ item }: { item: any }) => {
  return (
    <Form.Item
      style={{ marginBottom: ".5rem", width: "100%" }}
      key={item.massage}
      name={item.name}
      rules={[
        {
          required: true,
          // message:{item.key === 1}
        },
      ]}
    >
      {item.key === 0 ? <Input prefix={item.icon} placeholder={item.placeholder} /> : <Input.Password prefix={item.icon} placeholder={item.placeholder} />}
    </Form.Item>
  );
};

export default UserLoginInput;
