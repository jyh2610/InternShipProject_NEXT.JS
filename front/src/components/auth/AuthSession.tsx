"use client";

import React from "react";

import { Provider } from "react-redux";
import { StyleRegistry } from "styled-jsx";

import { store } from "@/redux/store";

type Props = {
  children: React.ReactNode;
};

export default function AuthSession({ children }: Props) {
  return (
    <Provider store={store}>
      <StyleRegistry>{children}</StyleRegistry>
    </Provider>
  );
}
