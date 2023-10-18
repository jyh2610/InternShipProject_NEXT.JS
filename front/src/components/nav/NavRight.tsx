import React, { useEffect } from "react";

import { Button } from "antd";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import { baseApi } from "@/API/api";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setAccessToken, setRefreshToken } from "@/redux/slicer/authSlice";

import NavDropDown from "./NavDropDown";

import type { MenuProps } from "antd";
import { getCookie, removeCookie } from "@/API/cookie";
import type { GetServerSideProps } from "next";
import { useDispatch } from "react-redux";
function NavRight({ scrollY }: { scrollY: number }) {
  const dispatch = useAppDispatch();
  const route = useRouter();
  const moveSignin = () => route.push("/signin");
  // 로컬 로그아웃
  const accesstoken = useAppSelector((state: any) => state.auth.accessToken);
  console.log(accesstoken, "___________ navright 에서 토큰이 있니");
  const api = new baseApi();

  useEffect(() => {
    // 리프레시 토큰을 가져오는 코드
    const refreshToken = getCookie("refresh_Token");

    // 리프레시 토큰을 서버로 보내는 코드
    const sendRefreshTokenToServer = async (refreshToken: string) => {
      try {
        const api = new baseApi();
        const response = await api.withTokenPost(refreshToken, {
          url: "/validate/reissuancetoken",
          options: {
            headers: {
              Authorization: `Bearer ${refreshToken}`, // yourAccessToken은 실제 엑세스 토큰 값으로 대체해야 합니다.
            },
          },
        });
        const newAccessToken = response.accessToken;
        dispatch(setAccessToken(newAccessToken));
      } catch (error) {
        console.error("에러 발생:", error);
        // 오류 처리
      }
    };
    sendRefreshTokenToServer(refreshToken);
  }, []);
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
      { key: "1", label: <a>한국어</a> },
      { key: "2", label: <a>영어</a> },
    ],
  };

  const isTop = scrollY === 0 ? "white" : "black";
  return (
    <div>
      <NavDropDown scrollY={scrollY} title={"한국어"} items={data} />
      {accesstoken ? (
        <Button onClick={logout} style={{ borderRadius: "14px", color: `${isTop}`, fontSize: "0.75rem" }} type="text">
          로그아웃
        </Button>
      ) : (
        <Button onClick={moveSignin} style={{ borderRadius: "14px", color: `${isTop}`, fontSize: "0.75rem" }} type="text">
          로그인
        </Button>
      )}
    </div>
  );
}

export default NavRight;
