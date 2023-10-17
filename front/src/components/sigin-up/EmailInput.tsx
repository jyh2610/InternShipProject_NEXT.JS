import React, { useState } from "react";

import { Button, Form, Input, Select } from "antd";

import { baseApi } from "@/API/api";
import { domainData } from "@/constants/constants";

interface emailType {
  id: string;
  domain: string;
  code: string;
}
function EmailInput() {
  const api = new baseApi();

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

  const codeSubmit = async () => {
    await api.post({ url: "sign/sendemail", body: { email: emailValue.id + "@" + emailValue.domain } });
  };

  const verifyCode = async () => {
    await api.post({
      url: "/sign/verifycode",
      body: {
        email: emailValue.id + "@" + emailValue.domain,
        code: emailValue.code,
      },
    });
  };

  return (
    <Form.Item name={["user", "email"]} label="이메일">
      <div className="flex flex-col text-center">
        <div className="flex w-full">
          <Input style={{ width: "45%" }} onChange={domainHandler} name="id" />
          <span className="my-auto">@</span>
          <div className="flex">
            <Input style={{ width: "45%" }} name="domain" value={emailValue.domain} onChange={domainHandler} />
            <Select defaultValue="직접 입력" style={{ width: 120 }} onChange={handleChange} options={domainData} />
            <Button onClick={codeSubmit}>이메일 인증</Button>
          </div>
        </div>
        <div className="flex w-1/2">
          <Input style={{ width: "45%" }} name="code" value={emailValue.code} onChange={domainHandler} />
          <Button onClick={verifyCode}>인증하기</Button>
        </div>
      </div>
    </Form.Item>
  );
}

export default EmailInput;
