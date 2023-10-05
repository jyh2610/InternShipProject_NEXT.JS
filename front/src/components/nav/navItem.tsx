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
    <>
      <Button type="text">홈</Button>
      <NavDropDown title={"제품"} items={data} />
      <Button type="text">홈</Button>
    </>
  );
}

export default NavItem;
