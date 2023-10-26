import React, { useState } from "react";
import { Button, Divider, Dropdown, Space } from "antd";
import { useRouter } from "next/navigation";
import NavDropDown from "./NavDropDown";
import { data } from "./Item";

export default function Burger({ open, setOpen }: { open: boolean; setOpen: Function }) {
  const items = data;
  const router = useRouter();
  const [dropdown, setIsDropDown] = useState(false);
  const menuStyle = {
    position: "absolute",
    zIndex: 990,
    width: "100%",
    height: "100vh",
    top: "0",
    left: "0",
    background: "white",
    gap: "2rem",
    textAlign: "start",
    marginTop: "60px",
  } as React.CSSProperties;
  return (
    <div style={menuStyle}>
      <ul className=" flex flex-col items-center justify-between py-[60px] gap-5">
        <li className="w-full">
          <Space className="w-full flex flex-col">
            <Button style={{ width: "100vw", height: "3rem", backgroundColor: "green" }} onClick={() => setIsDropDown((prev) => !prev)}>
              제품
            </Button>
            {dropdown && (
              <ul className="w-screen flex flex-col justify-between gap-3 pt-5">
                <Button style={{ height: "3rem", backgroundColor: "green" }} type="text" className="w-full">
                  디자인&렌더
                </Button>
                <Button style={{ height: "3rem", backgroundColor: "green" }} type="text" className="w-full">
                  애니매이션
                </Button>
                <Button style={{ height: "3rem", backgroundColor: "green" }} type="text" className="w-full">
                  브랜드갤러리
                </Button>
              </ul>
            )}
          </Space>
        </li>
        <li className="w-full">
          <Button style={{ height: "3.5rem", backgroundColor: "green" }} type="text" className="w-full">
            솔루션
          </Button>
        </li>
        <li className="w-full">
          <Button style={{ height: "3.5rem", backgroundColor: "green" }} type="text" className="w-full" onClick={() => router.push("/download")}>
            다운로드
          </Button>
        </li>
        <li className="w-full">
          <Button type="text" style={{ height: "3rem", backgroundColor: "green" }} className="w-full bg-ugreen" onClick={() => router.push("/signin")}>
            로그인
          </Button>
        </li>
      </ul>
    </div>
  );
}
