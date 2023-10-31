"use client";

import React from "react";

import { usePathname } from "next/navigation";

function SideBar() {
  const pathname = usePathname();
  const data = [
    {
      title: "약관동의",
      link: "/signup/provideinfo",
    },
    {
      title: "정보입력",
      link: "/signup/clientinfo",
    },
    {
      title: "가입완료",
      link: "/signup/sign-complete",
    },
  ];
  return (
    <>
      {data.map((data) => {
        return (
          <div
            className={`${
              data.link === pathname ? "font-extrabold py-[0.5rem] text-[0.875rem] cursor-pointer" : "font-light py-[0.5rem] text-[0.875rem] cursor-pointer"
            }`}
            key={data.title}
          >
            {data.title}
          </div>
        );
      })}
    </>
  );
}

export default SideBar;
