import React, { useEffect, useState } from "react";

import { Button, Form, Input, Select } from "antd";

import { baseApi } from "@/API/api";
import { domainData } from "@/constants/constants";

import EmailCode from "./EmailCode";
import { error } from "console";

interface emailType {
  id: string;
  domain: string;
  code: string;
}

function EmailInput() {
  const api = new baseApi();
  const [isActive, setIsActive] = useState(false);
  const [confirmemail, setConfirmEmail] = useState(false);
  const [emailValue, setEmailValue] = useState<emailType>({
    id: "",
    domain: "",
    code: "",
  });
  const email = `${emailValue.id}@${emailValue.domain}`;

  const [isValid, setIsValid] = useState<undefined | boolean>(false);

  const domainHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmailValue((prev) => {
      setIsValid(true);
      return { ...prev, [name]: value };
    });
  };

  const selectHandler = (value: string) => {
    setEmailValue((prev) => {
      return { ...prev, domain: value };
    });
  };

  const emailRegexFront = /^[a-z0-9]$/;
  const emailRegexBack = /@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

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
    setConfirmEmail(true);
  };

  useEffect(() => {
    const isValidEmail = emailRegexFront.test(email);
    setIsValid(isValidEmail);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emailValue]);

  return (
    <div>
      <Form.Item
        rules={[
          {
            required: true,
          },
          {
            validator: (_, value: string) => {
              if (isValid) {
                if (!isValid) {
                  return Promise.resolve();
                } else {
                  return Promise.reject(new Error("이메일 형식이 틀립니다."));
                }
              }
              return Promise.resolve(); // 형식 검사를 수행하지 않음
            },
          },
        ]}
        name={["email", "domain"]}
        label="이메일"
      >
        <div className="flex flex-col text-center">
          <div className="flex w-full">
            <Input style={{ width: "45%" }} name="id" onChange={domainHandler} />
            <span className="my-auto">@</span>
            <Form.Item>
              <div className="flex">
                <Input style={{ width: "45%" }} name="domain" value={emailValue.domain} onChange={domainHandler} />
                <Select placeholder="직접 입력" style={{ width: 120 }} options={domainData} onChange={selectHandler} />
                <Button onClick={sendingCode}>이메일 인증</Button>
              </div>
            </Form.Item>
          </div>
        </div>
      </Form.Item>
      {confirmemail && <EmailCode setIsActive={setIsActive} isActive={isActive} email={email} />}
    </div>
  );
}

export default EmailInput;
