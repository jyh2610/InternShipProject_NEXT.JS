"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ConfigProvider, Tabs } from "antd";
import type { TabsProps, ThemeConfig } from "antd";

const FindPw = dynamic(() => import("./FindPw"));

import "./style.css";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: <div className="tabs-btn">아이디 찾기</div>,
    children: <FindPw type="id" />,
  },
  {
    key: "2",
    label: <div className="tabs-btn">비밀번호 찾기</div>,
    children: <FindPw type="pw" />,
  },
];

const Findlayout = () => {
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
