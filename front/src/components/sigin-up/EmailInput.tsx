import React, { useState } from "react";

import { Button, Form, Input, Select } from "antd";

// import { baseApi } from "@/API/api";
import { domainData } from "@/constants/constants";

interface emailType {
  id: string;
  domain: string;
  code: string;
}

function EmailInput() {
  // const api = new baseApi();
  const [emailValue, setEmailValue] = useState<emailType>({
    id: "",
    domain: "",
    code: "",
  });

  const handleChange = (value: string) => {
    setEmailValue((prev) => {
      return { ...prev, domain: value };
    });
  };

  const domainHandler = (e: {
    target: {
      name: string;
      value: React.SetStateAction<string>;
    };
  }) => {
    setEmailValue((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  // 나머지 코드 유지
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

  return (
    <Form.Item
      rules={[
        {
          pattern: emailRegex,
          message: "이메일 양식이 틀립니다. 다시 한번 확인 하세요.",
        },
        {
          required: true,
          message: "이메일을 입력하세요.",
        },
      ]}
      name={["user", "email"]}
      label="이메일"
    >
      <div className="flex flex-col text-center">
        <div className="flex w-full">
          <Input style={{ width: "45%" }} onChange={domainHandler} name="id" />
          <span className="my-auto">@</span>
          <div className="flex">
            <Input style={{ width: "45%" }} name="domain" value={emailValue.domain} onChange={domainHandler} />
            <Select defaultValue="직접 입력" style={{ width: 120 }} onChange={handleChange} options={domainData} />
            <Button>이메일 인증</Button>
          </div>
        </div>
        {/* 나머지 코드 유지 */}
      </div>
    </Form.Item>
  );
}

export default EmailInput;
