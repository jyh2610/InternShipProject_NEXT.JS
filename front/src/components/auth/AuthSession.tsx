"use client";
import { Layout } from "antd";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { StyleRegistry } from "styled-jsx";

import { store } from "@/redux/store";

type Props = {
  children: React.ReactNode;
};

export default function AuthSession({ children }: Props) {
  return (
    <StyleRegistry>
      <SessionProvider>
        <Layout style={{ backgroundColor: "#fff" }}>
          <Provider store={store}>{children}</Provider>
        </Layout>
      </SessionProvider>
    </StyleRegistry>
  );
}
