"use client";
import React from "react";

import { Collapse, Divider } from "antd";
import { useRouter } from "next/navigation";

import type { CollapseProps } from "antd";

import "./style.css";

import Agreement from "@/components/provideinfo/Agreement";
import Content from "@/components/provideinfo/Content";
import SideHeader from "@/components/sigin-up/SideHeader";
import SiginupBtn from "@/components/sigin-up/SiginupBtn";
import AgreementBtn from "@/components/provideinfo/AgreementBtn";
import { provideText } from "@/constants/constants";

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "이용약관",
    children: (
      <div className="flex flex-col">
        <Content label="이용약관" provideText={provideText} />
        <Agreement type="checkOne" />
      </div>
    ),
  },
  {
    key: "2",
    label: "개인정보 수집 및 이용에 대한 안내",
    children: (
      <div className="flex flex-col ">
        <Content label="이용약관" provideText={provideText} />
        <Agreement type="checkTwo" />
      </div>
    ),
  },
  {
    key: "3",
    label: "제3자 개인정보 제공동의",
    children: (
      <div className="flex flex-col">
        <Content label="이용약관" provideText={provideText} />
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
    <div>
      <Collapse style={{ borderRadius: "0" }} items={items} defaultActiveKey={["1"]} onChange={onChange} />
      <AgreementBtn />
    </div>
  );
}

export default ProvideInfo;
