"use client";

import { Button, Layout, MenuProps } from "antd";
import { navItems } from "@/constants/navConst";
import NavItem from "./NavItem";
import NavDropDown from "./NavDropDown";
import useContact from "@/hooks/useContact";

const { Header } = Layout;

function Nav() {
  const navBotRef = useContact("nav");
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
        height: "100px",
        backgroundColor: "#F8F8FA",
        padding: "0 100px",
        position: "fixed",
        zIndex: "999",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="flex">
        <img
          className="w-40"
          src="https://private-user-images.githubusercontent.com/144188723/270843184-f185371f-3828-470c-91e4-b24f65c360c0.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTU3ODIwMzcsIm5iZiI6MTY5NTc4MTczNywicGF0aCI6Ii8xNDQxODg3MjMvMjcwODQzMTg0LWYxODUzNzFmLTM4MjgtNDcwYy05MWU0LWIyNGY2NWMzNjBjMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMwOTI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDkyN1QwMjI4NTdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kMjU2N2ExNDdkMTJjYTU0MjQwMzIyOTU3ZTE4NjUwMmFiNzM4OGUyZjUzOGFkYmQ1ZjI1ZTE1M2IxOGY2Zjg2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.2-LB5X-41FnLX84Kh23apx0miq4D8ABl36WaVUJjebM"
        />
        <NavItem />
      </div>
      <div>
        <NavDropDown title={"한국어"} items={data} />
        <Button>로그인</Button>
      </div>
    </Header>
  );
}

export default Nav;
