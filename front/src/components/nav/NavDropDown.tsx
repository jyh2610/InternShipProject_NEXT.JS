"use client";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, Space } from "antd";
import { useState } from "react";
import { font } from "./NavItem";

interface Props {
  title: string;
  items: MenuProps;
}

function NavDropDown({ title, items }: Props) {
  const [isopen, setIsOpen] = useState(false);
  const dropdownOpenHandler = () => {
    setIsOpen((prev) => !prev);
  };
  const iconSize = {
    fontSize: "14px",
  };
  return (
    <Dropdown menu={items} trigger={["click"]}>
      <Button style={font} onClick={dropdownOpenHandler} type="text">
        {title}
        {isopen ? <DownOutlined style={iconSize} /> : <UpOutlined style={iconSize} />}
      </Button>
    </Dropdown>
  );
}

export default NavDropDown;
