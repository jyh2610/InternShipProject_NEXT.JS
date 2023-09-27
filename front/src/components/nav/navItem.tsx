import { Button, Dropdown } from "antd";
import type { MenuProps } from "antd";

function NavItem() {
  const items: MenuProps["items"] = [
    { key: "1", label: <span>test 영역</span> },
    { key: "2", label: <span>test 영역</span> },
  ];
  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <Button>bottomLeft</Button>
    </Dropdown>
  );
}

export default NavItem;
