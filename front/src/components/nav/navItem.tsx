"use client";
import { Button } from "antd";
import { MenuProps } from "antd";
import NavDropDown from "./NavDropDown";

function NavItem() {
  const data: MenuProps = {
    items: [
      { key: "1", label: <a>test 영역</a> },
      { key: "2", label: <a>test 영역</a> },
    ],
  };

  return (
    <div className="flex justify-evenly w-72">
      <Button className="px-5 mr-1" type="text">
        홈
      </Button>
      <NavDropDown title={"제품"} items={data} />
      <Button className="px-5 mr-1" type="text">
        솔루션
      </Button>
      <Button className="px-5 mr-1" type="text">
        사전등록
      </Button>
    </div>
  );
}

export default NavItem;
