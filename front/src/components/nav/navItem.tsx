"use client";
import { Button } from "antd";
import { MenuProps } from "antd";
import NavDropDown from "./NavDropDown";

function NavItem() {
  const data: MenuProps = {
    items: [
      { key: "1", label: <a>test 영역</a> },
      { key: "2", label: <a>test 영역</a> },
    ],
  };

  return (
    <div>
      <Button>홈</Button>
      <NavDropDown title={"제품"} items={data} />
      <NavDropDown title={"솔루션"} items={data} />
      <Button>홈</Button>
    </div>
  );
}

export default NavItem;
