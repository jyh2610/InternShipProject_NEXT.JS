import { useRef, useState } from "react";
import NavItem from "./Item";
import { LogoWh, LogoGreen } from "@/constants/navConst";

function NavLeft({ scrollY }: { scrollY: number }) {
  const isTop = scrollY === 0 ? LogoWh : LogoGreen;
  return (
    <div className="flex items-center gap-16">
      <div className="w-52 h-10">
        <img className="w-full h-full object-container" src={isTop} />
      </div>
      <NavItem scrollY={scrollY} />
    </div>
  );
}

export default NavLeft;
