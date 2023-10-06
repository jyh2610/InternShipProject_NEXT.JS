import React from "react";
import NavItem from "./NavItem";

function NavLeft() {
  return (
    <div className="flex items-center gap-16">
      <div className="w-52 h-10">
        <img
          className="w-full h-full object-container"
          src="https://user-images.githubusercontent.com/144188723/272789232-cfcebc41-3f5a-41b3-8019-aa04f16fd16c.png"
        />
      </div>
      <NavItem />
    </div>
  );
}

export default NavLeft;
