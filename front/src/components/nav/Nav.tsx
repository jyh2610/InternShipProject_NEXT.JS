"use client";

import { Layout } from "antd";
import { navItems } from "@/constants/navConst";
import { useAppDispatch } from "@/redux/hooks";
import { toggleIsNav } from "@/redux/slicer/scrollStopper";
import { useRef } from "react";

const { Header } = Layout;

function Nav() {
  const ref = useRef(null);
  const items = navItems.map((item, idx) => {
    const key = idx + 1;
    return { key, label: item };
  });
  const dispatch = useAppDispatch();
  console.log(ref.current);
  return (
    <Header
      ref={ref}
      style={{
        width: "100%",
        height: "100px",
        backgroundColor: "#F8F8FA",
        padding: "1px",
        position: "fixed",
      }}
    >
      <div className="border-2 border-indigo-600 h-16">1111212312</div>
    </Header>
  );
}

export default Nav;
