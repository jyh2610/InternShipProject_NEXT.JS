"use client";

import { Button, Layout, MenuProps } from "antd";
import { navItems } from "@/constants/navConst";
import NavItem from "./NavItem";
import NavDropDown from "./NavDropDown";
import useContact from "@/hooks/useContact";

const { Header } = Layout;

function Nav() {
  const navBotRef = useContact();
  const data: MenuProps = {
    items: [
      { key: "1", label: <a>한국어</a> },
      { key: "2", label: <a>영어</a> },
    ],
  };

  return (
    <Header
      ref={navBotRef}
      style={{
        width: "100%",
        height: "80px",
        backgroundColor: "#F8F8FA",
        position: "fixed",
        zIndex: "999",
        display: "flex",
        alignItems: "center",
        padding: 0,
        lineHeight: 0,
      }}
    >
      <div className="Header-wrap w-full max-w-top h-20 flex items-center mx-auto px-5 justify-between">
        <div className="flex items-center jus">
          <div className="w-52 h-10">
            <img
              className="w-full h-full object-container"
              src="https://user-images.githubusercontent.com/144188723/272789232-cfcebc41-3f5a-41b3-8019-aa04f16fd16c.png"
            />
          </div>
          <NavItem />
        </div>
        <div className="flex">
          <NavDropDown title={"한국어"} items={data} />
          <Button style={{ backgroundColor: "#2AA86B", borderRadius: "14px", color: "white", fontSize: "0.75rem" }} type="text">
            로그인
          </Button>
        </div>
      </div>
    </Header>
  );
}

export default Nav;
