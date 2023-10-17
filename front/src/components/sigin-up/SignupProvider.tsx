import React from "react";

import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

import SideBar from "./SideBar";
import SideHeader from "./SideHeader";

function SignupProvider({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full ">
      <div style={{ padding: "0" }} className="mainwidth p-0">
        <Header style={{ padding: "0" }}>
          <SideHeader />
        </Header>
        <div className="flex">
          <Sider>
            <SideBar />
          </Sider>
          <Content className="flex  items-center justify-center">{children}</Content>
        </div>
      </div>
    </div>
  );
}

export default SignupProvider;
