"use client";
import { Menu } from "antd";

import { navItems } from "@/constants/navConst";

function Nav() {
  const items = navItems.map((item, idx) => {
    const key = idx + 1;
    return { key, label: item };
  });

  return (
    <Menu style={{ width: "100%", backgroundColor: "#F8F8FA", padding: "1px", position: "fixed" }} mode="horizontal">
      <div className="border-2 border-indigo-600 h-16">1111212312</div>
    </Menu>
  );
}

export default Nav;
