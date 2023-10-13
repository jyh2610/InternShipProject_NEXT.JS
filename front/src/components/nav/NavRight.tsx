import React from "react";

import { Button } from "antd";
import { useRouter } from "next/navigation";

import NavDropDown from "./NavDropDown";

import type { MenuProps } from "antd";

function NavRight({ scrollY }: { scrollY: number }) {
  const route = useRouter();
  const moveSignin = () => route.push("/signin");
  const data: MenuProps = {
    items: [
      { key: "1", label: <a>한국어</a> },
      { key: "2", label: <a>영어</a> },
    ],
  };

  const isTop = scrollY === 0 ? "white" : "black";

  return (
    <div>
      <NavDropDown scrollY={scrollY} title={"한국어"} items={data} />
      <Button onClick={moveSignin} style={{ borderRadius: "14px", color: `${isTop}`, fontSize: "0.75rem" }} type="text">
        로그인
      </Button>
    </div>
  );
}

export default NavRight;
