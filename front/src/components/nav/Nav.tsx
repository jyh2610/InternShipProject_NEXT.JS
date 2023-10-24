"use client";

import React, { useEffect, useState } from "react";

import { Layout } from "antd";
import { usePathname } from "next/navigation";

import useScroll from "@/hooks/useScroll";

import NavRight from "./NavRight";
import Hamberger from "./Hamberger";
import { debounce } from "lodash";
import { LogoGreen, LogoWh } from "@/constants/navConst";
import NavItem from "./Item";

const { Header } = Layout;

declare global {
  interface window {
    innerWidth: number;
  }
}
function Nav() {
  const routes = usePathname();
  const scrollY = useScroll();
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowWidth(window.innerWidth);
    }, 500);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isTop = routes !== "/" ? "white" : scrollY === 0 ? "transparent" : "white";
  const lineTop = routes !== "/" ? "1px" : scrollY === 0 ? "none" : "1px solid #E0E0E0";
  const Logo = routes !== "/" ? LogoGreen : scrollY === 0 ? LogoWh : LogoGreen;

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
        <div className="logo w-[180px]">
          <img className="w-full h-full object-container" src={Logo} />
        </div>
        {windowWidth !== null && windowWidth <= 768 ? (
          <Hamberger />
        ) : (
          <>
            <NavItem path={routes} scrollY={scrollY} />
            <NavRight path={routes} scrollY={scrollY} />
          </>
        )}
      </div>
    </Header>
  );
}

export default Nav;
