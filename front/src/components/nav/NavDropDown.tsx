"use client";
import { Dropdown, Button } from "antd";
import type { MenuProps } from "antd";

interface Props {
  title: string;
  items: MenuProps;
}

function NavDropDown({ title, items }: Props) {
  return (
    <Dropdown menu={items} trigger={["click"]}>
      <Button>{title}</Button>
    </Dropdown>
  );
}

export default NavDropDown;
