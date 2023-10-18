import React from "react";

import { Button } from "antd";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

import { baseApi } from "@/API/api";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setAccessToken } from "@/redux/slicer/authSlice";

import NavDropDown from "./NavDropDown";

import type { MenuProps } from "antd";

function NavRight({ scrollY }: { scrollY: number }) {
  const api = new baseApi();
  const dispatch = useAppDispatch();
  const { data: session } = useSession();
  const username = useAppSelector((state: any) => state.auth.username);

  const route = useRouter();
  const moveSignin = () => route.push("/signin");
  // 로컬 로그아웃
  const accesstoken = useAppSelector((state: any) => state.auth.accessToken);
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
    dispatch(setAccessToken(null));
    route.push("/");
  };
  // 소셜로그아웃
  const socialaccesstoken: string | undefined = session?.accessToken;
  const tokenToUse: string = socialaccesstoken || "";

  const sociallougout = async () => {
    const url = "/sign/signout"; // 요청을 보낼 URL
    const body = {};
    // Access Token 설정
    try {
      const response = await api.withTokenPost(tokenToUse, { url, body });
      console.log("응답 데이터:_________________________", socialaccesstoken, "\n", response);
    } catch (error) {
      console.error("에러 발생:", error);
    }
    dispatch(setAccessToken(null));
    signOut();
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
  const accessToken = useAppSelector((state: any) => state.auth.accessToken);
  return (
    <div className="flex items-center">
      <NavDropDown scrollY={scrollY} title={"한국어"} items={data} />
      {accessToken || session ? (
        <Button onClick={accessToken ? logout : sociallougout} style={{ borderRadius: "14px", color: `${isTop}`, fontSize: "0.75rem" }} type="text">
          {username}님 로그아웃
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
