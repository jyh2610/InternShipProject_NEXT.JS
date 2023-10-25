"use client";

import { useRouter } from "next/navigation";
import React from "react";

function SideBar() {
  const route = useRouter();
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
          <div
            className="cursor-pointer my-3 ml-[5rem] hover:font-bold"
            onClick={() => {
              route.push(`/signup${data.link}`);
            }}
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
