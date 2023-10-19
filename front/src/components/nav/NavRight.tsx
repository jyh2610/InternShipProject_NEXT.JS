import React, { useEffect } from "react";

import { Button } from "antd";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

import { baseApi } from "@/API/api";
import { getCookie, removeCookie } from "@/API/cookie";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setAccessToken } from "@/redux/slicer/authSlice";

import NavDropDown from "./NavDropDown";

import type { MenuProps } from "antd";

function NavRight({ scrollY }: { scrollY: number }) {
  const dispatch = useAppDispatch();
  const route = useRouter();

  const moveSignin = () => route.push("/signin");
  // 로컬 및 소셜 로그아웃
  const accesstoken = useAppSelector((state: any) => state.auth.accessToken);
  const api = new baseApi();
  const { data: session } = useSession();
  // 마운트 될때 리프레시 토큰 보내기
  const refreshToken = getCookie("refresh_Token");
  // 리프레시 토큰을 서버로 보내는 코드
  const sendRefreshTokenToServer = async (refreshToken: string) => {
    try {
      const api = new baseApi();
      const response = await api.post({
        url: "/validate/reissuancetoken",
        options: { headers: { Authorization: `Bearer ${refreshToken}` } },
      });
      const newAccessToken = response.accessToken;
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
    await update(null);
    const url = "/sign/signout"; // 요청을 보낼 URL
    // Access Token 설정
    try {
      const response = await api.post({
        url,
        options: {
          headers: {
            Authorization: `Bearer ${accesstoken}`, // yourAccessToken은 실제 엑세스 토큰 값으로 대체해야 합니다.
          },
        },
      });
      console.log("로그아웃응답 데이터:_________________________", response);
    } catch (error) {
      console.error("에러 발생:", error);
    }
    removeCookie("refresh_Token");
    dispatch(setAccessToken(null));
    route.push("/");
  };
  // useEffect(() => {
  //   sendRefreshTokenToServer(refreshToken);
  // }, []);
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
