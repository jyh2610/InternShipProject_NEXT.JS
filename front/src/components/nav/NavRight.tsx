import React from "react";

import { Button } from "antd";
import { useRouter } from "next/navigation";

import NavDropDown from "./NavDropDown";

import type { MenuProps } from "antd";

import { setAccessToken, setUserName } from "@/redux/slicer/authSlice";
import { signOut, useSession } from "next-auth/react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { baseApi } from "@/API/api";

function NavRight({ scrollY }: { scrollY: number }) {
  const dispatch = useAppDispatch();
  const { data: session } = useSession();
  const username = useAppSelector((state: any) => state.auth.username);

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
      { key: "1", label: <a>한국어</a> },
      { key: "2", label: <a>영어</a> },
    ],
  };

  const isTop = scrollY === 0 ? "white" : "black";
  const accessToken = useAppSelector((state: any) => state.auth.accessToken);
  return (
    <div>
      <NavDropDown scrollY={scrollY} title={"한국어"} items={data} />
      {accessToken || session ? (
        <Button onClick={accessToken ? logout : sociallougout} style={{ borderRadius: "14px", color: `${isTop}`, fontSize: "0.75rem" }} type="text">
          {username}님 로그아웃
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
