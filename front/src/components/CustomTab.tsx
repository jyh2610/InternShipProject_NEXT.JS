import type { TabsProps } from "antd";
import { Tabs } from "antd";
import React from "react";

function CustomTab() {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Tab 1",
      children: "Content of Tab Pane 1",
    },
    {
      key: "2",
      label: "Tab 2",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "Tab 3",
      children: "Content of Tab Pane 3",
    },
  ];
  return <Tabs defaultActiveKey="1" items={items} />;
}

export default CustomTab;
