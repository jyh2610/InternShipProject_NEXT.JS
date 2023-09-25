"use client";
import React from "react";

import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

type Props = {
  children: React.ReactNode;
};

export default function AuthSession({ children }: Props) {
  return (
    <SessionProvider>
      <Provider store={store}>{children}</Provider>
    </SessionProvider>
  );
}
