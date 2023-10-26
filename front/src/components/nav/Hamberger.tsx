import React, { useState } from "react";

import { MenuOutlined } from "@ant-design/icons";
import Burger from "./Burger";

function Hamberger({ open, setOpen }: { open: boolean; setOpen: Function }) {
  return (
    <>
      {!open ? (
        <MenuOutlined onClick={() => setOpen((prev: boolean) => !prev)} />
      ) : (
        <div onClick={() => setOpen(false)}>
          <svg
            className="h-8 w-8 text-gray-600"
            viewBox="0 0 26 26"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      )}
      {open && <Burger />}
    </>
  );
}

export default Hamberger;
