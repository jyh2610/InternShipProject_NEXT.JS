"use client";

import React from "react";

import { Layout } from "antd";

const { Header, Content, Sider } = Layout;

import SideBar from "./SideBar";
import SideHeader from "./SideHeader";

function SignupProvider({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center", background: "white" }}>
        <SideHeader />
      </Header>
      <Content>
        <Layout style={{ background: "white" }}>
          <Sider style={{ background: "white" }}>
            <SideBar />
          </Sider>
          <Content style={{ padding: "0" }}>{children}</Content>
        </Layout>
      </Content>
    </Layout>
  );
}

export default SignupProvider;
