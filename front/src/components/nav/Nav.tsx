"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Layout } from "antd";
import { usePathname, useRouter } from "next/navigation";
import useScroll from "@/hooks/useScroll";
import { debounce } from "lodash";
import { LogoGreen, LogoWh } from "@/constants/navConst";

const NavRight = dynamic(() => import("./NavRight"));
const Hamberger = dynamic(() => import("./Hamberger"));
const NavItem = dynamic(() => import("./Item"));

const { Header } = Layout;

function Nav() {
  const router = useRouter();
  const routes = usePathname();
  const scrollY = useScroll();
  const [windowWidth, setWindowWidth] = useState<number | null>(null); // 초기값 설정
  const [open, setOpen] = useState(false);

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

  const isTop = routes !== "/" || open === true ? "white" : scrollY === 0 ? "transparent" : "white";
  const lineTop = routes !== "/" || open === true ? "1px" : scrollY === 0 ? "none" : "1px solid #E0E0E0";
  const Logo = routes !== "/" || open === true ? LogoGreen : scrollY === 0 ? LogoWh : LogoGreen;

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
            <img onClick={() => router.push("/")} className="w-full h-full object-container" src={Logo} />
          </div>
          {windowWidth !== null && windowWidth > 768 && <NavItem path={routes} scrollY={scrollY} />}
        </div>
        {windowWidth !== null && windowWidth <= 768 ? (
          <Hamberger open={open} setOpen={setOpen} scrollY={scrollY} />
        ) : (
          <NavRight path={routes} scrollY={scrollY} />
        )}
      </div>
    </Header>
  );
}

export default Nav;
