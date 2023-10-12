"use client";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { Layout } from "antd";
import { StyleRegistry } from "styled-jsx";

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
