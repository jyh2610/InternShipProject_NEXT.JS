"use client";

import { Layout } from "antd";
import { navItems } from "@/constants/navConst";

const { Header } = Layout;

function Nav() {
  const items = navItems.map((item, idx) => {
    const key = idx + 1;
    return { key, label: item };
  });

  return (
    <Header
      style={{
        width: "100%",
        height: "100px",
        backgroundColor: "#F8F8FA",
        padding: "1px",
        position: "fixed",
        zIndex: "999",
      }}
    >
      <div className="border-2 border-indigo-600 h-16">1111212312</div>
    </Header>
  );
}

export default Nav;
