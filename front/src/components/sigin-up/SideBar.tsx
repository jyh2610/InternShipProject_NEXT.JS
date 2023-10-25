"use client";

import { useRouter } from "next/navigation";
import React from "react";

function SideBar() {
  const data = [
    {
      title: "약관동의",
      link: "/provideinfo",
    },
    {
      title: "정보입력",
      link: "/clientinfo",
    },
    {
      title: "가입완료",
      link: "/clientinfo",
    },
  ];
  return (
    <>
      {data.map((data) => {
        return (
          <div className="cursor-pointer my-3 ml-[5rem]" key={data.title}>
            {data.title}
          </div>
        );
      })}
    </>
  );
}

export default SideBar;
