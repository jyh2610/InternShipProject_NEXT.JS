"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { ConfigProvider, Tabs } from "antd";
import type { TabsProps, ThemeConfig } from "antd";

const FindPw = dynamic(() => import("./FindPw"));

import "./style.css";
import CheckID from "./CheckID";

export interface Email {
  id: string;
  domain: string;
}

const thmeConfig: ThemeConfig = {
  components: {
    Select: {
      selectorBg: "#F7F7F7",
      colorBorder: "none",
    },
    Tabs: {
      inkBarColor: "#26AF66",
      itemHoverColor: "none",
      itemSelectedColor: "#fff",
    },
  },
  token: {
    borderRadius: 0,
    controlHeight: 40,
    colorPrimaryHover: "transparent",
    controlOutline: "transparent",
  },
};

const Findlayout = () => {
  const [email, setEmail] = useState<Email>({
    id: "",
    domain: "",
  });
  const [checkID, setCheckID] = useState(false);

  const rederCheck = (type: string) => {
    return !checkID ? <FindPw checkID={checkID} setCheckID={setCheckID} email={email} setEmail={setEmail} type={type} /> : <CheckID />;
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: <div className="tabs-btn">아이디 찾기</div>,
      children: rederCheck("id"),
    },
    {
      key: "2",
      label: <div className="tabs-btn">비밀번호 찾기</div>,
      children: rederCheck("pw"),
    },
  ];

  return (
    <div className="findinfo-wrap">
      <div className="find-contant">
        <ConfigProvider theme={thmeConfig}>
          <Tabs tabBarStyle={{ width: "100%" }} tabBarGutter={0} defaultActiveKey="1" items={items} centered />
        </ConfigProvider>
      </div>
    </div>
  );
};

export default Findlayout;
