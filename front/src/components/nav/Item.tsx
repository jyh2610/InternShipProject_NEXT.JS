import { Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";

// import { getCookie } from "@/API/cookie";
// import { useAppSelector } from "@/redux/hooks";

import NavDropDown from "./NavDropDown";

import type { NavColorProps } from "@/type/nav";
import type { MenuProps } from "antd";

export const data: MenuProps = {
  items: [
    {
      style: { padding: "1.5rem", color: "#fff" },
      key: "1",
      label: (
        <Link href={"/product/design"} style={{ fontWeight: "700", fontSize: "1rem" }}>
          디자인 & 랜더
          <span className="block" style={{ fontWeight: "400", fontSize: "0.875rem" }}>
            디자인 & 랜더 카테고리에 작성 될 간단한 텍스트영역
          </span>
        </Link>
      ),
    },
    {
      style: { padding: "0 1.5rem", color: "#fff" },
      key: "2",
      label: (
        <Link href={"/product/animation"} style={{ fontWeight: "700", fontSize: "1rem" }}>
          애니메이션
          <span className="block" style={{ fontWeight: "400", fontSize: "0.875rem" }}>
            애니메이션 카테고리에 작성 될 간단한 텍스트영역
          </span>
        </Link>
      ),
    },
    {
      style: { padding: "1.5rem", color: "#fff" },
      key: "3",
      label: (
        <Link href={"/product/brandgallery"} style={{ fontWeight: "700", fontSize: "1rem" }}>
          브랜드갤러리
          <span className="block" style={{ fontWeight: "400", fontSize: "0.875rem" }}>
            브랜드갤러리 카테고리에 작성 될 간단한 텍스트영역
          </span>
        </Link>
      ),
    },
  ],
};
function NavItem({ scrollY, path }: NavColorProps) {
  const router = useRouter();

  // const accesstoken = useAppSelector((state) => state.auth.accessToken);

  // const refreshToken = getCookie("refresh_token");

  const isTop = path !== "/" ? "black" : scrollY === 0 ? "white" : "black";

  const font = {
    color: isTop,
    padding: "0",
    display: "flex",
    alignItems: "center",
  };

  return (
    <div className="pc flex gap-2">
      <Button style={font} className="px-5 mr-1" type="text">
        홈
      </Button>
      <NavDropDown title={"제품"} items={data} scrollY={scrollY} />
      <Button style={font} className="px-5 mr-1" type="text">
        솔루션
      </Button>
      <Button
        onClick={() => {
          router.push("/download");
        }}
        style={font}
        className="px-5 mr-1"
        type="text"
      >
        다운로드
      </Button>
    </div>
  );
}

export default NavItem;
