"use client";
import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Radio, Space, Tabs } from "antd";
import { slideData } from "@/constants/constants";

type TabPosition = "top";

const TabImage = () => {
  const [tabPosition, setTabPosition] = useState<TabPosition>("top");

  const changeTabPosition = (e: RadioChangeEvent) => {
    setTabPosition(e.target.value);
  };

  return (
    <>
      <Tabs
        tabPosition={tabPosition}
        items={slideData.map((item, i) => {
          const id = String(i + 1);
          return {
            label: <p style={{ color: "#000" }}>{item.id}</p>,
            key: id,
            children: (
              <div key={id} className="flex justify-center">
                <div key={id}>
                  <p className="text-[2.25rem] font-normal mb-[2rem]" dangerouslySetInnerHTML={{ __html: item.title }} />
                  <p dangerouslySetInnerHTML={{ __html: item.contentstext }} className=" text-[1.25rem] font-medium mb-[6.75rem]" />
                </div>
                <div>
                  <img src={item.img} alt={item.title} />
                </div>
              </div>
            ),
          };
        })}
      />
    </>
  );
};

export default TabImage;
