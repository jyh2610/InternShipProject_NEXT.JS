import { Form, Input, Select } from "antd";
import React, { useState } from "react";
import EmailAuthBtn from "./EmailAuthBtn";
import EmailCode from "./EmailCode";
import { domainData } from "@/constants/constants";

const EmailNew = ({ emailformValue }: { emailformValue: string }) => {
  const [emailbtn, setEmailbtn] = useState(false);
  const [confirmbtn, setConfirmbtn] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const selectHandler = () => {
    emailformValue;
  };
  //const emailidvalidation = "^[a-zA-Z0-9._-]$";
  //const emaildomainvalidation = "@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$";
  return (
    <div>
      <div className="flex gap-[0.3rem]">
        <Form.Item
          name="emailId" // 첫 번째 Form.Item
          label="이메일"
          rules={[
            { required: true, message: "이메일 아이디를 입력해 주세요." },
            {
              validator: (_, value) => {
                if (value.length > 2) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("아이디를 입력해주세요"));
              },
            },
          ]}
        >
          <Input style={{ padding: "0.5rem 0.8rem" }} />
        </Form.Item>
        <span style={{ height: "100%", padding: "0.5rem 0.8rem" }}>@</span>{" "}
        <Form.Item
          name="emailDomain" // 두 번째 Form.Item
          label=""
          rules={[
            { required: true, message: "도메인을 입력해 주세요." },
            {
              validator: (_, value) => {
                if (value.length > 2 && value.includes(".")) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("유효하지 않은 이메일 입니다."));
              },
            },
          ]}
        >
          <Input style={{ padding: "0.5rem 0.2rem" }} />
        </Form.Item>
        {!confirmbtn && (
          <Form.Item
            name="emailDomain" // 두 번째 Form.Item
            label=""
            rules={[{ message: "도메인을 선택하거나 입력해 주세요." }]}
          >
            <Select placeholder="직접 입력" style={{ height: "100%", padding: "0.5rem 0.8rem" }} options={domainData} onChange={selectHandler} />
          </Form.Item>
        )}
        <EmailAuthBtn
          emailbtn={emailbtn}
          setEmailbtn={setEmailbtn}
          setIsActive={setIsActive}
          isActive={isActive}
          setConfirmbtn={setConfirmbtn}
          confirmbtn={confirmbtn}
          emailformValue={emailformValue}
        />
      </div>
      <div style={{ marginLeft: "4rem", padding: "0.2rem 0.8rem" }}>
        {confirmbtn && <EmailCode setIsActive={setIsActive} isActive={isActive} email={emailformValue} />}
      </div>{" "}
    </div>
  );
};

export default EmailNew;
