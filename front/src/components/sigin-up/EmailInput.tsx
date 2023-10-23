"use client";

import React, { useEffect, useState } from "react";

import { Button, Form, Input, Select } from "antd";

import { baseApi } from "@/API/api";
import { domainData } from "@/constants/constants";

import EmailCode from "./EmailCode";

// import type { MenuProps } from "antd";

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
  console.log();
  const emailRegexFront = /^[a-z0-9]$/;

  const sendingCode = async () => {
    await api.post({
      url: "validate/sendemail",
      body: {
        email: emailValue.id + "@" + emailValue.domain,
      },
    });
    setIsActive(true);
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
            message: "이메일을 입력하세요",
          },
          {
            validator: (_, value: string) => {
              if (value) {
                // 앞부분(id)과 뒷부분(domain)이 모두 값이 있는 경우에만 유효성 검사 수행
                if (value.length >= 2) {
                  return Promise.resolve();
                } else {
                  return Promise.reject(new Error("이메일 형식이 틀렸습니다.다시 한번 확인 하세요."));
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
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "이메일을 입력하세요",
                },
                {
                  validator: (_, value: string) => {
                    if (value) {
                      // 입력 값이 비어있지 않은 경우에만 유효성 검사 수행
                      if (isValid) {
                        if (value.length >= 2 || value) {
                          return Promise.resolve();
                        } else {
                          return Promise.reject(new Error("이메일 형식이 틀렸습니다.다시 한번 확인 하세요."));
                        }
                      }
                    }
                    return Promise.resolve(); // 형식 검사를 수행하지 않음
                  },
                },
              ]}
            >
              <div className="flex">
                <Input style={{ width: "45%" }} name="domain" value={emailValue.domain} onChange={domainHandler} />

                <Select placeholder="직접 입력" style={{ width: 120 }} options={domainData} onChange={selectHandler} />

                {/* <Dropdown menu={{ domainData }} placement="bottom">
                  <Button>bottom</Button>
                </Dropdown> */}
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
