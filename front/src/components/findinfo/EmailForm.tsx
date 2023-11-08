"use client";

import React from "react";
import { domainData } from "@/constants/constants";
import { Select } from "antd";
import { sendEmailToFind } from "@/lib/EmailApi";
import type { Email } from "./Findlayout";

function EmailForm({ email, setEmail }: { email: Email; setEmail: Function }) {
  const inputHandler = (e: { target: { name: string; value: string } }) => {
    setEmail((prev: any) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleChange = (value: string) => {
    setEmail((prev: any) => {
      return {
        ...prev,
        domain: value,
      };
    });
  };

  const checkID = () => {
    const formattedEmail = `${email.id}@${email.domain}`;
    sendEmailToFind(formattedEmail);
  };

  return (
    <div className="flex">
      <div className="emall findinput">
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
      </div>
      <div className="w-2/12 my-auto">
        <button onClick={checkID} className="flex items-center justify-center text-xs email-btn w-full h-10">
          확인
        </button>
      </div>
    </div>
  );
}

export default EmailForm;
