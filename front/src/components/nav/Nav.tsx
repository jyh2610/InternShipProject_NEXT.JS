"use client";

import { Layout } from "antd";

import useContact from "@/hooks/useContact";
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";

const { Header } = Layout;

function Nav() {
  const navBotRef = useContact();

  return (
    <Header
      ref={navBotRef}
      style={{
        width: "100%",
        height: "80px",
        position: "fixed",
        backgroundColor: "transparent",
        zIndex: "999",
        display: "flex",
        alignItems: "center",
        padding: 0,
        lineHeight: 0,
        color: "white",
      }}
    >
      <div className="Header-wrap w-full max-w-top h-20 flex items-center mx-auto px-5 justify-between aspect-video">
        <NavLeft />
        <NavRight />
      </div>
    </Header>
  );
}

export default Nav;
