import React, { useEffect, useState } from "react";

import { Button, Form, Input, Select } from "antd";

import { domainData } from "@/constants/constants";

import EmailCode from "./EmailCode";

interface emailType {
  id: string;
  domain: string;
  code: string;
}

function EmailInput() {
  const [emailValue, setEmailValue] = useState<emailType>({
    id: "",
    domain: "",
    code: "",
  });
  const [isValid, setIsValid] = useState(true);

  const domainHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmailValue((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const selectHandler = (value: string) => {
    setEmailValue((prev) => {
      return { ...prev, domain: value };
    });
  };

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

  useEffect(() => {
    const email = `${emailValue.id}@${emailValue.domain}`;
    const isValidEmail = emailRegex.test(email);
    setIsValid(isValidEmail);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emailValue]);

  return (
    <div className="">
      <Form.Item
        rules={[
          {
            required: true,
            message: "이메일을 입력하세요.",
          },
        ]}
        validateStatus={isValid ? "success" : "error"}
        help={!isValid && "이메일 양식이 틀립니다. 다시 한번 확인하세요."}
        name={["user", "email"]}
        label="이메일"
      >
        <div className="flex flex-col text-center">
          <div className="flex w-full">
            <Input style={{ width: "45%" }} name="id" onChange={domainHandler} />
            <span className="my-auto">@</span>
            <div className="flex">
              <Input style={{ width: "45%" }} name="domain" value={emailValue.domain} onChange={domainHandler} />
              <Select placeholder="직접 입력" style={{ width: 120 }} options={domainData} onChange={selectHandler} />
              <Button>이메일 인증</Button>
            </div>
          </div>
        </div>
      </Form.Item>

      <EmailCode />
    </div>
  );
}

export default EmailInput;
