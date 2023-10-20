import React from "react";

import { Button } from "antd";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { useSelector } from "react-redux";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setAccessToken } from "@/redux/slicer/authSlice";

import NavDropDown from "./NavDropDown";

import type { MenuProps } from "antd";

function NavRight({ scrollY }: { scrollY: number }) {
  const dispatch = useAppDispatch();
  const username = useAppSelector((state: any) => state.auth.username);
  const { data: session } = useSession();

  const route = useRouter();
  const moveSignin = () => route.push("/signin");
  const logout = () => {
    dispatch(setAccessToken(null));
    route.push("/");
  };
  const sociallougout = () => {
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
  const accessToken = useSelector((state: any) => state.auth.accessToken);
  return (
    <div className="flex items-center">
      <NavDropDown scrollY={scrollY} title={"한국어"} items={data} />
      {accessToken || session ? (
        <Button
          onClick={accessToken ? logout : sociallougout}
          style={{ borderRadius: "14px", color: `${isTop}`, padding: "0", fontSize: "0.75rem" }}
          type="text"
        >
          <span>{username}님 로그아웃</span>
        </Button>
      ) : (
        <Button onClick={moveSignin} style={{ color: `${isTop}` }} type="text">
          <span>로그인</span>
        </Button>
      )}
    </div>
  );
}

export default NavRight;
