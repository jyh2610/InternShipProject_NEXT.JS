"use client";

import React, { useState } from "react";
import { domainData } from "@/constants/constants";
import { Select } from "antd";
import { sendEmail } from "@/lib/EmailApi";

interface Email {
  id: string;
  domain: string;
}

function EmailForm() {
  const [email, setEmail] = useState<Email>({
    id: "",
    domain: "",
  });
  const inputHandler = (e: { target: { name: string; value: string } }) => {
    setEmail((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    setEmail((prev) => {
      return {
        ...prev,
        domain: value,
      };
    });
  };
  const formattedEmail = `${email.id}@${email.domain}`;
  return (
    <div className="flex">
      <form className="emall findinput">
        <label htmlFor="이메일">이메일</label>
        <div className="w-10/12 flex items-center  gap-[0.3rem]">
          <input
            name="id"
            onChange={inputHandler}
            type="emall"
            id="emall"
            className="w-[45%] h-10 px-4 rounded border border-gray-300 focus:outline-none focus:border-gray-500"
          />
          <span className="font-bold text-[1rem] text-[#bfbfbf]">@</span>
          <Select
            className="ant-select-custom w-40 outline-none"
            style={{ width: "50%" }}
            defaultValue="직접입력"
            onChange={handleChange}
            options={domainData}
          />
        </div>
      </form>
      <div className="w-2/12 my-auto">
        <button onClick={() => sendEmail(formattedEmail)} className="flex items-center justify-center text-xs email-btn w-full h-10">
          확인
        </button>
      </div>
    </div>
  );
}

export default EmailForm;
