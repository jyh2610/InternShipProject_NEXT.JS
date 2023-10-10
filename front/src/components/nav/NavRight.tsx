import React from "react";
import NavDropDown from "./NavDropDown";
import { Button, MenuProps } from "antd";

function NavRight() {
  const data: MenuProps = {
    items: [
      { key: "1", label: <a>한국어</a> },
      { key: "2", label: <a>영어</a> },
    ],
  };

  return (
    <div>
      <NavDropDown title={"한국어"} items={data} />
      <Button style={{ borderRadius: "14px", color: "white", fontSize: "0.75rem" }} type="text">
        로그인
      </Button>
    </div>
  );
}

export default NavRight;
