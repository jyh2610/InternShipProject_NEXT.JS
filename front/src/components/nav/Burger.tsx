import React, { useEffect, useState } from "react";
import { Button, Space } from "antd";
import { useRouter } from "next/navigation";

export default function Burger() {
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

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <div className="" style={menuStyle}>
      <ul className=" flex flex-col items-center justify-between pt-[30px]">
        <li className="w-full">
          <Button
            className="w-full"
            type="text"
            style={{ borderRadius: "0", borderBottom: "1px solid #E2E2E2" }}
            onClick={() => setIsDropDown((prev) => !prev)}
          >
            제품
          </Button>
          {dropdown && (
            <ul className="w-full flex flex-col justify-between ">
              <Button onClick={() => router.push("/design")} style={{ height: "2rem" }} type="text" className="w-full">
                디자인&렌더
              </Button>
              <Button onClick={() => router.push("/animation")} style={{ height: "2rem" }} type="text" className="w-full">
                애니매이션
              </Button>
              <Button onClick={() => router.push("/brand/gallery")} style={{ height: "2rem" }} type="text" className="w-full">
                브랜드갤러리
              </Button>
            </ul>
          )}
        </li>
        <li className="w-full">
          <Button style={{ borderRadius: "0", borderBottom: "1px solid #E2E2E2" }} type="text" className="w-full" onClick={() => router.push("/solution")}>
            솔루션
          </Button>
        </li>
        <li className="w-full">
          <Button style={{ borderRadius: "0", borderBottom: "1px solid #E2E2E2" }} type="text" className="w-full" onClick={() => router.push("/download")}>
            다운로드
          </Button>
        </li>
        <li className="w-full">
          <Button
            type="text"
            style={{ borderRadius: "0", borderBottom: "1px solid #E2E2E2" }}
            className="w-full bg-ugreen"
            onClick={() => router.push("/signin")}
          >
            로그인
          </Button>
        </li>
      </ul>
    </div>
  );
}
