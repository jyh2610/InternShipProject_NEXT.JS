"use client";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, Space } from "antd";
import { useState } from "react";

interface Props {
  title: string;
  items: MenuProps;
}

function NavDropDown({ title, items }: Props) {
  const [isopen, setIsOpen] = useState(false);
  const dropdownOpenHandler = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <Dropdown menu={items} trigger={["click"]}>
      <Button onClick={dropdownOpenHandler} type="text">
        {title}
        {isopen ? <UpOutlined /> : <DownOutlined />}
      </Button>
    </Dropdown>
  );
}

export default NavDropDown;
