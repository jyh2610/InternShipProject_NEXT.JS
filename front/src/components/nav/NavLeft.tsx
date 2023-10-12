import { useRef, useState } from "react";
import NavItem from "./Item";
import { LogoWh } from "@/constants/navConst";

function NavLeft({ scrollY }: { scrollY: number }) {
  const [isScroll, setIsScroll] = useState(false);
  const scrollRef = useRef(null);
  return (
    <div ref={scrollRef} className="flex items-center gap-16">
      <div className="w-52 h-10">
        <img className="w-full h-full object-container" src={LogoWh} />
      </div>
      <NavItem />
    </div>
  );
}

export default NavLeft;
