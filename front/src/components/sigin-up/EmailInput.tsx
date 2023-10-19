import React, { useEffect, useState } from "react";

import { Button, Form, Input, Select } from "antd";

import { baseApi } from "@/API/api";
import { domainData } from "@/constants/constants";

import EmailCode from "./EmailCode";

interface emailType {
  id: string;
  domain: string;
  code: string;
}

function EmailInput() {
  const api = new baseApi();
  const [isActive, setIsActive] = useState(false);

  const [emailValue, setEmailValue] = useState<emailType>({
    id: "",
    domain: "",
    code: "",
  });
  const email = `${emailValue.id}@${emailValue.domain}`;

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

  const sendingCode = async () => {
    try {
      await api.post({
        url: "validate/sendemail",
        body: {
          email: emailValue.id + "@" + emailValue.domain,
        },
      });
      await setIsActive(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const isValidEmail = emailRegex.test(email);
    setIsValid(isValidEmail);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emailValue]);

  return (
    <div>
      <Form.Item
        rules={[
          {
            required: true,
            message: "이메일을 입력하세요.",
          },
        ]}
        validateStatus={isValid ? "success" : "error"}
        help={!isValid && "이메일 양식이 틀립니다. 다시 한번 확인하세요."}
        name={"email"}
        label="이메일"
      >
        <div className="flex flex-col text-center">
          <div className="flex w-full">
            <Input style={{ width: "45%" }} name="id" onChange={domainHandler} />
            <span className="my-auto">@</span>
            <div className="flex">
              <Input style={{ width: "45%" }} name="domain" value={emailValue.domain} onChange={domainHandler} />
              <Select placeholder="직접 입력" style={{ width: 120 }} options={domainData} onChange={selectHandler} />
              <Button onClick={sendingCode}>이메일 인증</Button>
            </div>
          </div>
        </div>
      </Form.Item>
      <EmailCode setIsActive={setIsActive} isActive={isActive} email={email} />
    </div>
  );
}

export default EmailInput;
