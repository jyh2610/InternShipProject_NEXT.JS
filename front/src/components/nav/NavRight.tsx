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
      {
        style: { padding: "0.5rem 0.5rem 0 0.5rem", color: "#fff" },
        key: "1",
        label: (
          <a style={{ fontWeight: "500", fontSize: "0.875rem" }}>
            한국어
          </a>
        ),
      },
      {
        style: { padding: "0.5rem", color: "#fff" },
        key: "2",
        label: (
          <a style={{ fontWeight: "500", fontSize: "0.875rem" }}>
            영어
          </a>
        ),
      },
    ],
  };

  const isTop = scrollY === 0 ? "white" : "black";

  return (
    <div className="flex items-center">
      <NavDropDown scrollY={scrollY} title={"한국어"} items={data} />
      <Button onClick={moveSignin} style={{ color: `${isTop}` }} type="text">
        로그인
      </Button>
    </div>
  );
}

export default NavRight;
