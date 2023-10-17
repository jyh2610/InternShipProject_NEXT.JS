"use client";

import React from "react";

import { Divider } from "antd";

function SideBar() {
  const data = [
    {
      title: "약관동의",
    },
    {
      title: "정보입력",
    },
    {
      title: "가입완료",
    },
  ];
  return (
    <>
      <Divider />
      {data.map((data) => {
        return <div key={data.title}>{data.title}</div>;
      })}
    </>
  );
}

export default SideBar;
