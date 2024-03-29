"use client";
import React, { useCallback, useEffect, useMemo } from "react";

import { Button } from "antd";
import { usePathname, useRouter } from "next/navigation";

import { getCookie, removeCookie } from "@/API/cookie";
import { logOutHandler, refreshTokenHandler } from "@/lib/signinApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setAccessToken } from "@/redux/slicer/authSlice";

import NavDropDown from "./NavDropDown";

import type { NavColorProps } from "@/type/nav";
import { signOut } from "next-auth/react";
// import type { MenuProps } from "antd";

function NavRight({ scrollY }: NavColorProps) {
  const dispatch = useAppDispatch();
  const route = useRouter();
  const path = usePathname();
  const accesstoken = useAppSelector((state) => state.auth.accessToken);
  const refreshToken: string | null = getCookie("refreshToken_local");
  const isTop = path !== "/" ? "black" : scrollY === 0 ? "white" : "black";
  const isLogin = accesstoken === "" && refreshToken === undefined;

  const sendRefreshTokenToServer = useCallback(
    async (refreshToken: string) => {
      const res = await refreshTokenHandler(refreshToken);
      const newAccessToken = res?.accessToken;
      dispatch(setAccessToken(newAccessToken));
    },
    [dispatch],
  );

  const logout = useCallback(async () => {
    await signOut();
    accesstoken && (await logOutHandler(accesstoken));
    removeCookie("refreshToken_local");
    dispatch(setAccessToken(null));
    alert("로그아웃되었습니다.");
  }, [accesstoken, dispatch]);

  useEffect(() => {
    isLogin && sendRefreshTokenToServer(refreshToken!);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accesstoken, sendRefreshTokenToServer, refreshToken]);

  const data = useMemo(
    () => ({
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
    }),
    [],
  );

  return (
    <div className="flex items-center pc">
      <NavDropDown scrollY={scrollY} title={"한국어"} items={data} />
      {!accesstoken && !refreshToken ? (
        <Button onClick={() => route.push("/signin")} style={{ color: `${isTop}` }} type="text">
          로그인
        </Button>
      ) : (
        <Button onClick={logout} style={{ color: `${isTop}` }} type="text">
          로그아웃
        </Button>
      )}
    </div>
  );
}

export default React.memo(NavRight);
