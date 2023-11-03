"use client";
import React from "react";

import { Form } from "antd";
import { useRouter } from "next/navigation";

const FindButton = () => {
  const route = useRouter();
  const data = [
    {
      title: "아이디 찾기",
      link: "/preparation",
    },
    {
      title: "비밀번호 찾기",
      link: "/preparation",
    },
    {
      title: "회원가입",
      link: "/signup/provideinfo",
    },
  ];
  return (
    <Form.Item className="text-center">
      <div className="flex justify-center gap-[3rem]">
        {data.map((item) => (
          <div
            onClick={() => {
              route.push(`${item.link}`);
            }}
            key={item.title}
            className="find-btn login-form-forgot text-[#000]"
          >
            {item.title}
          </div>
        ))}
      </div>
    </Form.Item>
  );
};

export default FindButton;
