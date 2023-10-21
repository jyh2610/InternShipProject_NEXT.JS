import React, { useEffect } from "react";

import { Button } from "antd";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

import { getCookie, removeCookie } from "@/API/cookie";
import { logOutHandler, refreshTokenHandler } from "@/lib/signinApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setAccessToken } from "@/redux/slicer/authSlice";

import NavDropDown from "./NavDropDown";

import type { MenuProps } from "antd";

function NavRight({ scrollY }: { scrollY: number }) {
  const dispatch = useAppDispatch();
  const route = useRouter();

  const moveSignin = () => route.push("/signin");

  const accesstoken = useAppSelector((state) => state.auth.accessToken);

  const refreshToken = getCookie("refresh_token");

  const sendRefreshTokenToServer = async (refreshToken: string) => {
    try {
      const res = await refreshTokenHandler(refreshToken);
      const newAccessToken = res.accessToken;
      dispatch(setAccessToken(newAccessToken));
    } catch (error) {
      console.error("에러 발생:", error);
      // 오류 처리
    }
  };
  //로컬 로그아웃
  const logout = async () => {
    await signOut({ callbackUrl: "/" });
    accesstoken && (await logOutHandler(accesstoken));
    removeCookie("refresh_token");
    dispatch(setAccessToken(null));
  };

  useEffect(() => {
    !accesstoken && sendRefreshTokenToServer(refreshToken);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accesstoken]);

  const data: MenuProps = {
    items: [
      {
        style: { padding: "0.5rem 0.5rem 0 0.5rem", color: "#fff" },
        key: "1",
        label: <a style={{ fontWeight: "500", fontSize: "0.875rem" }}>한국어</a>,
      },
      {
        style: { padding: "0.5rem", color: "#fff" },
        key: "2",
        label: <a style={{ fontWeight: "500", fontSize: "0.875rem" }}>영어</a>,
      },
    ],
  };
  const isTop = scrollY === 0 ? "white" : "black";
  return (
    <div className="flex items-center">
      <NavDropDown scrollY={scrollY} title={"한국어"} items={data} />
      {accesstoken || refreshToken ? (
        <Button onClick={logout} style={{ borderRadius: "14px", color: `${isTop}`, fontSize: "0.75rem" }} type="text">
          로그아웃
        </Button>
      ) : (
        <Button onClick={moveSignin} style={{ color: `${isTop}` }} type="text">
          로그인
        </Button>
      )}
    </div>
  );
}

export default NavRight;
