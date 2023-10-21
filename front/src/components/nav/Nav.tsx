"use client";

import React, { useEffect, useState } from "react";

import { Layout } from "antd";
import { usePathname } from "next/navigation";

import NavLeft from "./NavLeft";
import NavRight from "./NavRight";

const { Header } = Layout;

function Nav() {
  const [scrollY, setScrollY] = useState(0);
  const routes = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // 페이지가 로드될 때와 스크롤 이벤트가 발생할 때 스크롤 위치를 업데이트합니다.
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        <NavLeft scrollY={scrollY} />
        <NavRight scrollY={scrollY} />
      </div>
    </Header>
  );
}

export default Nav;
