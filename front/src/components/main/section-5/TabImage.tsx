"use client";
import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Radio, Space, Tabs } from "antd";
import { slideData } from "@/constants/constants";
import Image from "next/image";

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
                <div className="ml-[10.25rem] bottom-[5rem] flex flex-col justify-start" key={id}>
                  <p className="text-[2rem] font-normal mb-[2rem]" dangerouslySetInnerHTML={{ __html: item.title }} />
                  <p dangerouslySetInnerHTML={{ __html: item.contentstext }} className=" text-[1.2rem] font-medium mb-[6.75rem]" />
                </div>
                <div>
                  <Image width={1101} height={760} src={item.img} alt={item.title} />
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
