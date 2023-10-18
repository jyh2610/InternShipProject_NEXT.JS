import { useState } from "react";
import React from "react";

import { Button, Dropdown } from "antd";

import type { MenuProps } from "antd";

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

  // const iconSize = {
  //   fontSize: "14px",
  // };

  const menuStyle: React.CSSProperties = {
    boxShadow: "none",
    backgroundColor: "rgba(42, 168, 107, 0.25)",
    backdropFilter: "blur(20px)",
    marginTop: "1rem",
  };
  const isTop = scrollY === 0 ? "white" : "black";

  const upIcon =
    scrollY === 0
      ? "https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaBbhSnF3DIHUK33VLtHUIfOkxtP7iDjUNzCnTSV1MH6bZA1kYsCRr5qWRqS_8P2xLq2046ktTjcH2TEHZEGopmFBV2YrA=w1920-h921"
      : "https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaBxaKicz9rx17IZwtXSMdncMAG6hQacau3o1KgNJYp28a6UFkEg4dgq5bou6e_vnbNixpgehvtmTU-GosNNqvA4INoD7A=w1920-h889";

  const downIcon =
    scrollY === 0
      ? "https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaAs5Eu7GLVdB0exOs6AwG6ArsD-SpciakHKfC1fJRFFuonjZ8ZSn8300UzRKs2DWCyzouDLtfpIGnxeNE3orJLuW6pW=w1920-h889"
      : "https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaBiyere-Mf7CsbPWjrhqK49iYMuWBw9gI3ouu_gS2Tak1emkPIFjb9t8boJhDTSZKeBXcZZvxQDMzSkd48fQGCm-JSDcQ=w1920-h921";

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
