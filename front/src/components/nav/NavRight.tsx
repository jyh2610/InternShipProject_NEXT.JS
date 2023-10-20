import React, { useEffect } from "react";

import { Button } from "antd";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { useSelector } from "react-redux";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setAccessToken } from "@/redux/slicer/authSlice";
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

  // 로컬 및 소셜 로그아웃
  const accesstoken = useAppSelector((state) => state.auth.accessToken);

  // 마운트 될때 리프레시 토큰 보내기

  const refreshToken = getCookie("refresh_token");

  // 리프레시 토큰을 서버로 보내는 코드

  const sendRefreshTokenToServer = async (refreshToken: string) => {
    try {
      const res = await refreshTokenHandler(refreshToken);

      const newAccessToken = res.accessToken;
      // 리덕스 스토어에도 저장
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
  const btnLayout = { display: "flex", alignItems: "center" };

  const accessToken = useSelector((state: any) => state.auth.accessToken);
  return (
    <div className="flex items-center gap-3">
      <NavDropDown scrollY={scrollY} title={"한국어"} items={data} />
      {accessToken || session ? (
        <Button
          onClick={accessToken ? logout : sociallougout}
          style={{ ...btnLayout, borderRadius: "14px", color: `${isTop}`, padding: "0", fontSize: "0.75rem" }}
          type="text"
        >
          <span>{username}님 로그아웃</span>
        </Button>
      ) : (
        <Button onClick={moveSignin} style={{ color: `${isTop}`, padding: "0" }} type="text">
          <span>로그인</span>
        </Button>
      )}
    </div>
  );
}

export default NavRight;
