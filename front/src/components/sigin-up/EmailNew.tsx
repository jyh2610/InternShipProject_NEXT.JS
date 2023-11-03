import { Form, Input, Select } from "antd";
import React, { useState } from "react";
import EmailAuthBtn from "./EmailAuthBtn";
import EmailCode from "./EmailCode";
import { domainData } from "@/constants/constants";

const EmailNew = ({
  setResSuccess,
  resSuccess,
  emailformValue,
  confirmbtn,
  emailbtn,
  setEmailbtn,
  setConfirmbtn,
}: {
  confirmbtn: boolean;
  setConfirmbtn: any;
  emailformValue: string;
  emailbtn: boolean;
  setEmailbtn: any;
  setResSuccess: any;
  resSuccess: any;
}) => {
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(180);
  const selectHandler = () => {
    emailformValue;
  };
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
            <Select
              placeholder="직접 입력"
              style={{ height: "2.4rem", marginBottom: "-2rem", padding: "0 0.8rem" }}
              options={domainData}
              onChange={selectHandler}
            />
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
          setSeconds={setSeconds}
        />
      </div>
      <div style={{ marginLeft: "4rem", marginBottom: "2rem", padding: "0.2rem 0.8rem" }}>
        {confirmbtn && (
          <EmailCode
            setConfirmbtn={setConfirmbtn}
            setIsActive={setIsActive}
            seconds={seconds}
            setSeconds={setSeconds}
            isActive={isActive}
            email={emailformValue}
            setResSuccess={setResSuccess}
            resSuccess={resSuccess}
          />
        )}
      </div>{" "}
    </div>
  );
};

export default EmailNew;
