import { DownOutlined, UpOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, Space, Divider, theme, Divider, theme } from "antd";
import { useState } from "react";
import React from "react";
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
  const menuStyle: React.CSSProperties = {
    boxShadow: "none",
    backgroundColor: "rgba(42, 168, 107, 0.25)",
    padding:"1rem 2rem",
    backdropFilter:"blur(20px)",
  };
  return (
    <Dropdown
      dropdownRender={(menu) => <>{React.cloneElement(menu as React.ReactElement, { style: menuStyle })}</>}
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
        {isopen ? <img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaBbhSnF3DIHUK33VLtHUIfOkxtP7iDjUNzCnTSV1MH6bZA1kYsCRr5qWRqS_8P2xLq2046ktTjcH2TEHZEGopmFBV2YrA=w1920-h921" /> : <img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaAs5Eu7GLVdB0exOs6AwG6ArsD-SpciakHKfC1fJRFFuonjZ8ZSn8300UzRKs2DWCyzouDLtfpIGnxeNE3orJLuW6pW=w1920-h889" />}
      </Button>
    </Dropdown>
  );
}

export default NavDropDown;
