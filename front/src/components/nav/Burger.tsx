import React from "react";
import { Button, Divider, Space } from "antd";
import { useRouter } from "next/navigation";

export default function Burger({ open, setOpen }: { open: boolean; setOpen: Function }) {
  const router = useRouter();

  const menuStyle = {
    position: "absolute",
    zIndex: 9999,
    width: "100%",
    height: "100vh",
    top: "0",
    left: "0",
    background: "white",
    gap: "2rem",
    marginTop: "60px",
  } as React.CSSProperties;

  return (
    <div style={menuStyle}>
      <ul className="h-2/3 flex flex-col items-center justify-between pt-[60px]">
        <li>
          <Button onClick={() => router.push("/signin")}>로그인</Button>
        </li>
        <li>
          <Button onClick={() => router.push("/")}>홈</Button>
        </li>
        <li>
          <Space className="flex flex-col">
            <h1>제품</h1>
            <ul className="flex flex-col justify-between">
              <Button>디자인&렌더</Button>
              <Button>애니매이션</Button>
              <Button>브랜드갤러리</Button>
            </ul>
          </Space>
        </li>
        <li>
          <Button>솔루션</Button>
        </li>
        <li>
          <Button onClick={() => router.push("/download")}>다운로드</Button>
        </li>
      </ul>
    </div>
  );
}
