"use client";
import React from "react";

import { Collapse, Divider } from "antd";
import { useRouter } from "next/navigation";

import type { CollapseProps } from "antd";

import Agreement from "@/components/provideinfo/Agreement";
import Content from "@/components/provideinfo/Content";
import { provideText, provideTitle } from "@/constants/constants";
import SideHeader from "@/components/sigin-up/SideHeader";

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "이용약관",
    children: (
      <div className="flex flex-col">
        <Content label="이용약관" provideTitle={provideTitle} provideText={provideText} />
        <Agreement type="checkOne" />
      </div>
    ),
  },
  {
    key: "2",
    label: "개인정보 수집 및 이용에 대한 안내",
    children: (
      <div className="flex flex-col">
        <Content label="이용약관" provideTitle={provideTitle} provideText={provideText} />
        <Agreement type="checkTwo" />
      </div>
    ),
  },
  {
    key: "3",
    label: "제3자 개인정보 제공동의",
    children: (
      <div className="flex flex-col">
        <Content label="이용약관" provideTitle={provideTitle} provideText={provideText} />
        <Agreement type="checkThree" />
      </div>
    ),
  },
];

function ProvideInfo() {
  const route = useRouter();

  const onChange = (key: string | string[]) => {
    console.log(key);
  };
  return (
    <div className="mx-[3rem]">
      <SideHeader />
      <Divider />
      <Collapse items={items} defaultActiveKey={["1"]} onChange={onChange} />
      <button className="px-[2.2rem] py-[0.8rem]">취소</button>
      <button
        className="px-[2.1rem] py-[0.8rem]"
        onClick={() => {
          route.push("/signup/clientinfo");
        }}
      >
        회원가입
      </button>
    </div>
  );
}

export default ProvideInfo;
