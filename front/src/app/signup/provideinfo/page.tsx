"use client";
import React, { useEffect, useState } from "react";

import { Collapse } from "antd";

import type { CollapseProps } from "antd";

import "./style.css";

import Agreement from "@/components/provideinfo/Agreement";
import AgreementBtn from "@/components/provideinfo/AgreementBtn";
import Content from "@/components/provideinfo/Content";
import { provideText } from "@/constants/constants";

// eslint-disable-next-line import/order

function ProvideInfo() {
  const [check, setCheck] = useState({
    one: false,
    two: false,
    three: false,
  });

  const [activeKey, setActiveKey] = useState(["1"]);

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "이용약관",
      children: (
        <div className="flex flex-col">
          <Content label="이용약관" provideText={provideText} />
          <Agreement type="One" check={check} setCheck={setCheck} />
        </div>
      ),
    },
    {
      key: "2",
      label: "개인정보 수집 및 이용에 대한 안내",
      children: (
        <div className="flex flex-col ">
          <Content label="이용약관" provideText={provideText} />
          <Agreement type="Two" check={check} setCheck={setCheck} />
        </div>
      ),
    },
    {
      key: "3",
      label: "제3자 개인정보 제공동의",
      children: (
        <div className="flex flex-col">
          <Content label="이용약관" provideText={provideText} />
          <Agreement type="Three" check={check} setCheck={setCheck} />
        </div>
      ),
    },
  ];

  const keyonChange = (key: React.SetStateAction<string[]>) => {
    setActiveKey(key);
    console.log(activeKey);
  };
  useEffect(() => keyonChange(activeKey), [keyonChange]);
  return (
    <div>
      <Collapse style={{ borderRadius: "0" }} items={items} activeKey={activeKey.slice(-1)} onChange={keyonChange} />
      <AgreementBtn check={check} />
    </div>
  );
}

export default ProvideInfo;
