import React, { useState, useEffect } from "react";

import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import Burger from "./Burger";
import { usePathname } from "next/navigation";

function Hamberger({ open, setOpen, scrollY }: { open: boolean; setOpen: Function; scrollY: number }) {
  const router = usePathname();
  const isTop = router !== "/" ? "black" : scrollY === 0 ? "white" : "black";
  return (
    <>
      {!open ? (
        <MenuOutlined style={{ color: isTop }} onClick={() => setOpen(true)} />
      ) : (
        <CloseOutlined style={{ color: isTop }} onClick={() => setOpen(false)} />
      )}
      {open && <Burger />}
    </>
  );
}

export default Hamberger;
