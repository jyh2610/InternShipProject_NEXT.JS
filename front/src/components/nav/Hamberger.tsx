import React, { useEffect, useState } from "react";

import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { usePathname } from "next/navigation";

import Burger from "./Burger";

function Hamberger({ open, setOpen, scrollY }: { open: boolean; setOpen: Function; scrollY: number }) {
  const router = usePathname();
  const isTop = router !== "/" ? "black" : scrollY === 0 ? "white" : "black";
  return (
    <div className="mo">
      {!open ? (
        <MenuOutlined style={{ color: isTop }} onClick={() => setOpen(true)} />
      ) : (
        <CloseOutlined style={{ color: "black" }} onClick={() => setOpen(false)} />
      )}
      {open && <Burger />}
    </div>
  );
}

export default Hamberger;
