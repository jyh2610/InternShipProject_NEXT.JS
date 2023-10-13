import React from "react";

import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

import Nav from "../nav/Nav";

function SignupProvider({ children }: { children: React.ReactNode }) {
  return (
    <Layout className="m-auto w-screen h-screen">
      <Nav />
      <Layout>
        <Header>{/* <SideHeader /> */}</Header>
        <Sider>{/* <SideBar /> */}</Sider>
        <Content className="isisis">{children}</Content>
      </Layout>
    </Layout>
  );
}

export default SignupProvider;
