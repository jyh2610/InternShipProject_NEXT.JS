import { DownOutlined, UpOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, Space, Divider, theme } from "antd";
import { useState } from "react";
import React from "react";

interface Props {
  title: string;
  items: MenuProps;
  scrollY: number;
}

function NavDropDown({ title, items, scrollY }: Props) {
  const [isopen, setIsOpen] = useState(false);
  const dropdownOpenHandler = () => {
    setIsOpen((prev) => !prev);
  };
  const iconSize = {
    fontSize: "14px",
  };
  const contentStyle: React.CSSProperties = {
    backgroundColor: "red",
  };
  const menuStyle: React.CSSProperties = {
    backgroundColor: "black",
  };

  const isTop = scrollY === 0 ? "white" : "black";

  return (
    <Dropdown
      dropdownRender={(menu) => <div style={contentStyle}>{React.cloneElement(menu as React.ReactElement, { style: menuStyle })}</div>}
      menu={items}
      trigger={["click"]}
    >
      <Button
        style={{
          color: isTop,
        }}
        onClick={dropdownOpenHandler}
        type="text"
      >
        {title}
        {isopen ? <DownOutlined style={iconSize} /> : <UpOutlined style={iconSize} />}
      </Button>
    </Dropdown>
  );
}

export default NavDropDown;
