import { Button, Dropdown } from "antd";
import type { MenuProps } from "antd";
import Link from "next/link";

function NavItem() {
  const items: MenuProps["items"] = [
    { key: "1", label: <span>test 영역</span> },
    { key: "2", label: <span>test 영역</span> },
  ];
  return (
    <div>
      <Dropdown menu={{ items }} placement="bottomLeft" arrow>
        <Button>bottomLeft</Button>
      </Dropdown>
    </div>
  );
}

export default NavItem;
