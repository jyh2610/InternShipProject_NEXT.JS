import SolutionContents from "./solution/SolutionContents";

import { ConfigProvider, Tabs } from "antd";

import type { TabsProps } from "antd";

function CustomTab() {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "인테리어 디자인",
      children: <SolutionContents />,
    },
    {
      key: "2",
      label: "가구브랜드",
      children: <SolutionContents />,
    },
    {
      key: "3",
      label: "제조",
      children: <SolutionContents />,
    },
  ];
  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            inkBarColor: "#26AF66",
            itemHoverColor: "none",
            itemSelectedColor: "black",
          },
        },
      }}
    >
      <Tabs centered defaultActiveKey="1" items={items} />
    </ConfigProvider>
  );
}

export default CustomTab;
