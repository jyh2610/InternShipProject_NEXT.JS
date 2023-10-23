"use client";
import React from "react";

import { Collapse } from "antd";
import { useRouter } from "next/navigation";

import type { CollapseProps } from "antd";

import Agreement from "@/components/provideinfo/Agreement";
import Content from "@/components/provideinfo/Content";
import { provideText, provideTitle } from "@/constants/constants";

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
    <div className="mx-[12rem]">
      <Collapse items={items} defaultActiveKey={["1"]} onChange={onChange} />
      <button>취소</button>
      <button
        onClick={() => {
          route.push("/signup/clientinfo");
        }}
      >
        다음
      </button>
    </div>
  );
}

export default ProvideInfo;
