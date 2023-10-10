"use client";
import React from "react";

import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { Layout } from "antd";

type Props = {
  children: React.ReactNode;
};

export default function AuthSession({ children }: Props) {
  return (
    <SessionProvider>
      <Layout style={{ backgroundColor: "#fff" }}>
        <Provider store={store}>{children}</Provider>
      </Layout>
    </SessionProvider>
  );
}
