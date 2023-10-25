import { Button, Divider } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

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
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    justifyContent: "start",
    alignItems: "center",
    marginTop: "60px",
  } as React.CSSProperties;

  return (
    <ul style={menuStyle}>
      <li>
        <div onClick={() => router.push("/signin")}>로그인</div>
      </li>
      <li>
        <div onClick={() => router.push("/")}>홈</div>
      </li>
      <li>
        <div>제품</div>
        <ul style={{ display: "none" }}>
          <li>디자인&렌더</li>
          <li>애니매이션</li>
          <li>브랜드갤러리</li>
        </ul>
      </li>
      <li>
        <div>솔루션</div>
      </li>
      <li>
        {" "}
        <div onClick={() => router.push("/download")}>다운로드</div>
      </li>
    </ul>
  );
}
