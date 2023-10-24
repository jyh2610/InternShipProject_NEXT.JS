"use client";

import React from "react";

import { Layout } from "antd";
import { usePathname } from "next/navigation";

import useScroll from "@/hooks/useScroll";

import NavLeft from "./NavLeft";
import NavRight from "./NavRight";

const { Header } = Layout;

function Nav() {
  const routes = usePathname();
  const scrollY = useScroll();

  const isTop = routes !== "/" ? "white" : scrollY === 0 ? "transparent" : "white";

  const lineTop = routes !== "/" ? "1px" : scrollY === 0 ? "none" : "1px solid #E0E0E0";

  return (
    <Header
      style={{
        width: "100%",
        height: "60px",
        position: "fixed",
        top: "0",
        backgroundColor: isTop,
        zIndex: "999",
        display: "flex",
        alignItems: "center",
        padding: 0,
        lineHeight: 0,
        borderBottom: lineTop,
      }}
    >
      <div className="mainwidth mx-auto flex items-center justify-between" style={{ height: "60px" }}>
        <NavLeft path={routes} scrollY={scrollY} />
        <NavRight path={routes} scrollY={scrollY} />
      </div>
    </Header>
  );
}

export default Nav;
