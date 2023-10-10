"use client";
import { Button } from "antd";
import { MenuProps } from "antd";
import NavDropDown from "./NavDropDown";

export const font = {
  color: "white",
};
function NavItem() {
  const data: MenuProps = {
    items: [
      { key: "1", label: <a>test 영역</a> },
      { key: "2", label: <a>test 영역</a> },
    ],
  };

  return (
    <div className="flex justify-evenly w-72">
      <Button style={font} className="px-5 mr-1" type="text">
        홈
      </Button>
      <NavDropDown title={"제품"} items={data} />
      <Button style={font} className="px-5 mr-1" type="text">
        솔루션
      </Button>
      <Button style={font} className="px-5 mr-1" type="text">
        사전등록
      </Button>
    </div>
  );
}

export default NavItem;
