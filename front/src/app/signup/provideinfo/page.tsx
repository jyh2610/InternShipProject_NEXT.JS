"use client";
import React, { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { Collapse } from "antd";

import "./style.css";

import { provideText } from "@/constants/constants";
import { PrivacyText } from "@/constants/constants";
import { informationText } from "@/constants/constants";

import type { CollapseProps } from "antd";

const Agreement = dynamic(() => import("@/components/provideinfo/Agreement"));
const AgreementBtn = dynamic(() => import("@/components/provideinfo/AgreementBtn"));
const Content = dynamic(() => import("@/components/provideinfo/Content"));

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
          <Content label="개인정보 수집" provideText={PrivacyText} />
          <Agreement type="Two" check={check} setCheck={setCheck} />
        </div>
      ),
    },
    {
      key: "3",
      label: "제3자 개인정보 제공동의",
      children: (
        <div className="flex flex-col">
          <Content label="제3자 제공" provideText={informationText} />
          <Agreement type="Three" check={check} setCheck={setCheck} />
        </div>
      ),
    },
  ];

  const keyonChange = useCallback(
    (key: string | string[]) => {
      if (Array.isArray(key)) {
        setActiveKey(key);
      } else {
        setActiveKey([key]); // Convert the string to an array
      }
    },
    [activeKey],
  );
  useEffect(() => keyonChange(activeKey), [keyonChange, activeKey]);
  return (
    <>
      <Collapse style={{ borderRadius: "0" }} items={items} activeKey={activeKey.slice(-1)} onChange={keyonChange} />
      <AgreementBtn check={check} />
    </>
  );
}

export default ProvideInfo;
