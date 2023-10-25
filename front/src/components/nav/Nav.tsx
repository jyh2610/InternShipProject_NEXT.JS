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
import { getServerSession } from "next-auth";

const { Header } = Layout;

function Nav() {
  const routes = usePathname();
  const scrollY = useScroll();
  const [windowWidth, setWindowWidth] = useState<number>(0); // 초기값 설정

  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowWidth(window.innerWidth);
    }, 200);

    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
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
      <div className="mainwidth mx-auto flex items-center justify-between " style={{ height: "60px" }}>
        <div className="flex gap-10">
          <div className="logo w-[180px]">
            <img className="w-full h-full object-container" src={Logo} />
          </div>
          {windowWidth > 768 && <NavItem path={routes} scrollY={scrollY} />}
        </div>
        {windowWidth <= 768 ? <Hamberger /> : <NavRight path={routes} scrollY={scrollY} />}
      </div>
    </Header>
  );
}

export default React.memo(Nav);
