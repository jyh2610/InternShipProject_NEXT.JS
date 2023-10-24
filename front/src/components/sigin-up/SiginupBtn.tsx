"use client";

import React from "react";

import { Button, Form } from "antd";

function SiginupBtn({ validateForm }: { validateForm: () => void }) {
  return (
    <Form.Item wrapperCol={{ offset: 8 }}>
      <Button type="primary" htmlType="submit">
        취소
      </Button>
      <Button onClick={validateForm} type="primary" className="bg-gray-300" htmlType="submit">
        회원가입
      </Button>
    </Form.Item>
  );
}

export default SiginupBtn;
