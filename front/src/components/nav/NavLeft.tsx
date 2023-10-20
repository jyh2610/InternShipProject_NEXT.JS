import { LogoGreen, LogoWh } from "@/constants/navConst";

import NavItem from "./Item";

function NavLeft({ scrollY }: { scrollY: number }) {
  const isTop = scrollY === 0 ? LogoWh : LogoGreen;
  return (
    <div className="flex items-center gap-10">
      <div className="logo w-[180px]">
        <img className="w-full h-full object-container" src={isTop} />
      </div>
      <NavItem scrollY={scrollY} />
    </div>
  );
}

export default NavLeft;
