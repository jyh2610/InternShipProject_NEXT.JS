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
        <div className="flex">
          <img
            className="w-1/5 object-container"
            src="https://private-user-images.githubusercontent.com/144188723/270843184-f185371f-3828-470c-91e4-b24f65c360c0.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTYzOTQ1ODgsIm5iZiI6MTY5NjM5NDI4OCwicGF0aCI6Ii8xNDQxODg3MjMvMjcwODQzMTg0LWYxODUzNzFmLTM4MjgtNDcwYy05MWU0LWIyNGY2NWMzNjBjMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMDA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTAwNFQwNDM4MDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zZjIyZGRmYTA2Y2YxNmRlMGRlMzBhNjVlZTQ1MzI0OGY5ZDA3ODM1ZmU0YTE3MGQ1YThjNjBjNGYwNGUwYzkwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.7LxdkT4s1CTDdJwi1g7h_ahUDmJCf02UgBw36bOSs2I"
          />
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
