"use client";
import React, { useState } from "react";
import { ConfigProvider, Space, Tabs } from "antd";
import { tab_img } from "@/constants/constants";
import Image from "next/image";

type TabPosition = "top";

const TabImage = () => {
  const [tabPosition] = useState<TabPosition>("top");

  return (
    <div className="pl-[12rem]">
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              inkBarColor: "#26AF66",
              itemHoverColor: "none",
              itemSelectedColor: "#fff",
              horizontalItemGutter: 0,
            },
          },
        }}
      >
        <Space>
          <Tabs
            tabPosition={tabPosition}
            items={tab_img.map((item, i) => {
              const id = String(i + 1);
              return {
                label: <div style={{ fontSize: "1.25rem", color: "black" }}>0{item.id + 1}</div>,
                key: id,
                children: (
                  <div className="w-full">
                    <div key={id} className="tab_contant flex gap-[2rem]">
                      <div className="tab_text" key={id}>
                        <p className="tab-tit" dangerouslySetInnerHTML={{ __html: item.title }} />
                        <p dangerouslySetInnerHTML={{ __html: item.contentstext }} />
                      </div>
                      <div className="tab_img shadow-2xl">
                        <Image width={1600} height={200} src={item.img} alt={item.title} />
                      </div>
                    </div>
                  </div>
                ),
              };
            })}
          />
        </Space>
      </ConfigProvider>
    </div>
  );
};

export default TabImage;
