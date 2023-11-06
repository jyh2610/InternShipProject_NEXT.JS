"use client";

import React from "react";
import { ConfigProvider, Tabs } from "antd";
import type { TabsProps } from "antd";

import FindPw from "./FindPw";

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
  return (
    <div className="findinfo-wrap">
      <div className="find-contant">
        <ConfigProvider
          theme={{
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
          }}
        >
          <Tabs tabBarStyle={{ width: "100%" }} tabBarGutter={0} defaultActiveKey="1" items={items} centered />
        </ConfigProvider>
      </div>
    </div>
  );
};

export default Findlayout;
