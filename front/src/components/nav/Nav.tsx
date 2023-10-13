import { useEffect, useState } from "react";

import { Layout } from "antd";

import NavLeft from "./NavLeft";
import NavRight from "./NavRight";

const { Header } = Layout;

function Nav() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // 페이지가 로드될 때와 스크롤 이벤트가 발생할 때 스크롤 위치를 업데이트합니다.
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isTop = scrollY === 0 ? "transparent" : "white";

  return (
    <Header
      style={{
        width: "100%",
        height: "60px",
        position: "fixed",
        backgroundColor: isTop,
        zIndex: "999",
        display: "flex",
        alignItems: "center",
        padding: 0,
        lineHeight: 0,
      }}
    >
      <div className="Header-wrap w-full max-w-top flex items-center mx-auto px-5 justify-between aspect-video">
        <NavLeft scrollY={scrollY} />
        <NavRight scrollY={scrollY} />
      </div>
    </Header>
  );
}

export default Nav;
