import React, { useEffect } from "react";

import { Button } from "antd";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import { baseApi } from "@/API/api";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setAccessToken, setRefreshToken } from "@/redux/slicer/authSlice";

import NavDropDown from "./NavDropDown";

import type { MenuProps } from "antd";

import { setAccessToken, setUserName } from "@/redux/slicer/authSlice";
import { signOut, useSession } from "next-auth/react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { baseApi } from "@/API/api";

function NavRight({ scrollY }: { scrollY: number }) {
  const api = new baseApi();
  const dispatch = useAppDispatch();
  const route = useRouter();
  const moveSignin = () => route.push("/signin");
  // 로컬 로그아웃
  const accesstoken = useAppSelector((state: any) => state.auth.accessToken);
  const api = new baseApi();
  const logout = async () => {
    const url = "/sign/signout"; // 요청을 보낼 URL
    const body = {};
    // Access Token 설정
    try {
      const response = await api.withTokenPost(accesstoken, { url, body });
      console.log("응답 데이터:_________________________", accesstoken, "\n", response);
    } catch (error) {
      console.error("에러 발생:", error);
    }
    removeCookie("refresh_Token");
    dispatch(setAccessToken(null));
    dispatch(setRefreshToken(null));
    route.push("/");
  };

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
      {accesstoken ? (
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
