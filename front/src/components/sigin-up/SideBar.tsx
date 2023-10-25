"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";

function SideBar() {
  const pathname = usePathname();
  console.log(pathname, "_____");
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
      link: "/",
    },
  ];
  return (
    <>
      {data.map((data) => {
        return (
          <div className={`${data.link === pathname ? "font-extrabold my-3 ml-[5rem]" : "my-3 ml-[5rem]"}`} key={data.title}>
            {data.title}
          </div>
        );
      })}
    </>
  );
}

export default SideBar;
