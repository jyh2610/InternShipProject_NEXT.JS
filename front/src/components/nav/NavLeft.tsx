import { LogoGreen, LogoWh } from "@/constants/navConst";

import NavItem from "./Item";
import { NavColorProps } from "@/type/nav";

function NavLeft({ scrollY, path }: NavColorProps) {
  const isTop = path !== "/" ? LogoGreen : scrollY === 0 ? LogoWh : LogoGreen;
  return (
    <div className="flex items-center gap-10">
      <div className="logo w-[180px]">
        <img className="w-full h-full object-container" src={isTop} />
      </div>
      <NavItem path={path} scrollY={scrollY} />
    </div>
  );
}

export default NavLeft;
