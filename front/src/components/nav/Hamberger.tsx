import React, { useState } from "react";

import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import Burger from "./Burger";

function Hamberger({ open, setOpen }: { open: boolean; setOpen: Function }) {
  return (
    <>
      {!open ? <MenuOutlined onClick={() => setOpen((prev: boolean) => !prev)} /> : <CloseOutlined onClick={() => setOpen(false)} />}
      {open && <Burger />}
    </>
  );
}

export default Hamberger;
