import { Button, Divider } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

export default function Burger({ open, setOpen }: { open: boolean; setOpen: Function }) {
  const menuStyle = {
    position: "absolute",
    width: "100%",
    height: "100vh",
    top: "0",
    left: "0",
    background: "white",
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center",
    marginTop: "60px",
  } as React.CSSProperties;
  const router = useRouter();
  return (
    <div style={open ? menuStyle : { display: "none" }}>
      <Button onClick={() => router.push("/signin")} type="text">
        로그인
      </Button>
      <Divider />
      <Button onClick={() => router.push("/")} type="text">
        홈
      </Button>
      <Divider />
      <Button style={{ backgroundColor: "#2AA86B" }} type="text">
        제품
      </Button>
      <Divider />
      <Button type="text">솔루션</Button>
      <Button onClick={() => router.push("/download")} type="text">
        다운로드
      </Button>
    </div>
  );
}
