"use client";

import React from "react";

import SideBar from "./SideBar";
import SideHeader from "./SideHeader";

function SignupProvider({ children }: { children: React.ReactNode }) {
  return (
    <div className="mainwidth mx-auto">
      <div style={{}}>
        <SideHeader />
      </div>
      <div className="flex justify-between gap-[1rem] pt-[40px]">
        <div>
          <SideBar />
        </div>
        <div style={{ width: "90%", borderRadius: "0" }}>{children}</div>
      </div>
    </div>
  );
}

export default SignupProvider;
