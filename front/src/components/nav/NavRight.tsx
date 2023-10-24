"use client";
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
import { NavColorProps } from "@/type/nav";

function NavRight({ scrollY, path }: NavColorProps) {
  const dispatch = useAppDispatch();
  const route = useRouter();

  const accesstoken = useAppSelector((state) => state.auth.accessToken);

  const refreshToken: string | null = getCookie("refresh_token");

  const sendRefreshTokenToServer = async (refreshToken: string) => {
    const res = await refreshTokenHandler(refreshToken);
    const newAccessToken = res?.accessToken;
    dispatch(setAccessToken(newAccessToken));
  };

  const logout = async () => {
    await signOut({ callbackUrl: "/" });
    accesstoken && (await logOutHandler(accesstoken));
    removeCookie("refresh_token");
    dispatch(setAccessToken(""));
  };

  useEffect(() => {
    !accesstoken && sendRefreshTokenToServer(refreshToken!);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accesstoken]);
  const isTop = path !== "/" ? "black" : scrollY === 0 ? "white" : "black";

  const data: MenuProps = {
    items: [
      {
        style: { padding: "0.5rem 0.5rem 0 0.5rem", color: "#fff" },
        key: "1",
        label: <div style={{ fontWeight: "500", fontSize: "0.875rem" }}>한국어</div>,
      },
      {
        style: { padding: "0.5rem", color: "#fff" },
        key: "2",
        label: <div style={{ fontWeight: "500", fontSize: "0.875rem" }}>영어</div>,
      },
    ],
  };

  return (
    <div className="flex items-center">
      <NavDropDown scrollY={scrollY} title={"한국어"} items={data} />
      {accesstoken !== undefined || refreshToken !== undefined ? (
        <Button onClick={logout} style={{ color: `${isTop}` }} type="text">
          로그아웃
        </Button>
      ) : (
        <Button onClick={() => route.push("/signin")} style={{ color: `${isTop}` }} type="text">
          로그인
        </Button>
      )}
    </div>
  );
}

export default NavRight;
