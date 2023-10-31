import { useState } from "react";
import React from "react";

import { Button, Dropdown } from "antd";
import { usePathname } from "next/navigation";

import { inconSrc } from "@/constants/navConst";

import type { MenuProps } from "antd";

interface Props {
  title: string;
  items: MenuProps;
  scrollY: number;
}

function NavDropDown({ title, items, scrollY }: Props) {
  const path = usePathname();
  const [isopen, setIsOpen] = useState(false);
  const [upIcon, downIcon] = inconSrc(scrollY, path);
  const isTop = path !== "/" ? "black" : scrollY !== 0 ? "white" : "black";

  const dropdownOpenHandler = () => {
    setIsOpen((prev) => !prev);
  };

  const menuStyle: React.CSSProperties = {
    boxShadow: "none",
    backgroundColor: "rgba(42, 168, 107, 0.25)",
    backdropFilter: "blur(20px)",
    marginTop: "1rem",
  };

  return (
    <Dropdown dropdownRender={(menu) => <>{React.cloneElement(menu as React.ReactElement, { style: menuStyle })}</>} menu={items} trigger={["click"]}>
      <Button
        style={{
          color: isTop,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.3rem",
          padding: "0",
        }}
        onClick={dropdownOpenHandler}
        type="text"
      >
        {title}
        {isopen ? <img alt="icon" src={upIcon} /> : <img alt="icon" src={downIcon} />}
      </Button>
    </Dropdown>
  );
}

export default NavDropDown;
