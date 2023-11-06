"use client";
import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { ConfigProvider, Radio, Space, Tabs } from "antd";
import { slideData, tab_img } from "@/constants/constants";
import Image from "next/image";

type TabPosition = "top";

const TabImage = () => {
  const [tabPosition, setTabPosition] = useState<TabPosition>("top");

  const changeTabPosition = (e: RadioChangeEvent) => {
    setTabPosition(e.target.value);
  };

  return (
    <div className="mainwidth mx-auto">
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              inkBarColor: "#26AF66",
              itemHoverColor: "none",
              itemSelectedColor: "#fff",
            },
          },
        }}
      >
        <Tabs
          tabPosition={tabPosition}
          items={tab_img.map((item, i) => {
            const id = String(i + 1);
            return {
              label: <div style={{ fontSize: "1.2rem", color: "#000" }}>0{item.id + 1}</div>,
              key: id,
              children: (
                <div className="w-full">
                  <div key={id} className="tab_contant flex gap-[2rem]">
                    <div className="tab_text" style={{ width: "100%", maxWidth: "640px" }} key={id}>
                      <p className="" dangerouslySetInnerHTML={{ __html: item.title }} />
                      <p dangerouslySetInnerHTML={{ __html: item.contentstext }} className=" text-[1.2rem] font-medium" />
                    </div>
                    <div className="tab_img">
                      <Image width={1600} height={640} src={item.img} alt={item.title} />
                    </div>
                  </div>
                </div>
              ),
            };
          })}
        />
      </ConfigProvider>
    </div>
  );
};

export default TabImage;
