"use client";

import React from "react";
import { ConfigProvider, Tabs } from "antd";
import type { TabsProps } from "antd";

import FindPw from "./FindPW";
import FindId from "./FindId";

import "./style.css";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: <div className="tabs-btn">아이디 찾기</div>,
    children: <FindId />,
  },
  {
    key: "2",
    label: <div className="tabs-btn">비밀번호 찾기</div>,
    children: <FindPw />,
  },
];

const Findlayout = () => {
  return (
    <div className="findinfo-wrap">
      <div className="find-contant">
        <ConfigProvider
          theme={{
            components: {
              Tabs: {
                inkBarColor: "#26AF66",
                itemHoverColor: "none",
                itemSelectedColor: "#fff",
              },
            },
          }}
        >
          <Tabs tabBarStyle={{ width: "100%" }} tabBarGutter={0} defaultActiveKey="1" items={items} onChange={onChange} centered />
        </ConfigProvider>
      </div>
    </div>
  );
};

export default Findlayout;
