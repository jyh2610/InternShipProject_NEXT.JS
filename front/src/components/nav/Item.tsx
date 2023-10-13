import { Button } from "antd";

import NavDropDown from "./NavDropDown";

import type { MenuProps } from "antd";

function NavItem({ scrollY }: { scrollY: number }) {
  const data: MenuProps = {
    items: [
      {
        style: { padding: "0.8rem 0", color: "#fff" },
        key: "1",
        label: (
          <a style={{ fontWeight: "700", fontSize: "1rem" }}>
            디자인 & 랜더
            <span className="block" style={{ fontWeight: "400", fontSize: "0.875rem" }}>
              디자인 & 랜더 카테고리에 작성 될 간단한 텍스트영역
            </span>
          </a>
        ),
      },
      {
        style: { padding: "0.8rem 0", color: "#fff" },
        key: "2",
        label: (
          <a style={{ fontWeight: "700", fontSize: "1rem" }}>
            애니메이션
            <span className="block" style={{ fontWeight: "400", fontSize: "0.875rem" }}>
              애니메이션 카테고리에 작성 될 간단한 텍스트영역
            </span>
          </a>
        ),
      },
      {
        style: { padding: "0.8rem 0", color: "#fff" },
        key: "3",
        label: (
          <a style={{ fontWeight: "700", fontSize: "1rem" }}>
            브랜드갤러리
            <span className="block" style={{ fontWeight: "400", fontSize: "0.875rem" }}>
              브랜드갤러리 카테고리에 작성 될 간단한 텍스트영역
            </span>
          </a>
        ),
      },
    ],
  };
  const isTop = scrollY === 0 ? "white" : "black";
  const font = {
    color: isTop,
  };

  return (
    <div className="flex justify-evenly w-72">
      <Button style={font} className="px-5 mr-1" type="text">
        홈
      </Button>
      <NavDropDown title={"제품"} items={data} scrollY={scrollY} />
      <Button style={font} className="px-5 mr-1" type="text">
        솔루션
      </Button>
      <Button style={font} className="px-5 mr-1" type="text">
        사전등록
      </Button>
    </div>
  );
}

export default NavItem;