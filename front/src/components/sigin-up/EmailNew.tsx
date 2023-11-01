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

  return (
    <div>
      <div className="flex">
        <Form.Item
          name="emailId" // 첫 번째 Form.Item
          label="이메일"
          rules={[{ required: true, message: "이메일 아이디를 입력해 주세요." }]}
        >
          <Input />
        </Form.Item>
        <span>@</span>
        <Form.Item
          name="emailDomain" // 두 번째 Form.Item
          label=""
          rules={[{ message: "도메인을 입력해 주세요." }]}
        >
          <Input />
        </Form.Item>

        {!confirmbtn && (
          <Form.Item
            name="emailDomain" // 두 번째 Form.Item
            label=""
            rules={[{ message: "도메인을 선택하거나 입력해 주세요." }]}
          >
            <Select placeholder="직접 입력" style={{ width: "8%", height: "auto" }} options={domainData} onChange={selectHandler} />
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
      <div>{confirmbtn && <EmailCode setIsActive={setIsActive} isActive={isActive} email={emailformValue} />}</div>{" "}
    </div>
  );
};

export default EmailNew;
