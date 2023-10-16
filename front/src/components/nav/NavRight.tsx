import React from "react";

import { Button } from "antd";
import { useRouter } from "next/navigation";

import NavDropDown from "./NavDropDown";

import type { MenuProps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setAccessToken, setUserName } from "@/redux/slicer/authSlice";
import { signOut, useSession } from "next-auth/react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

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
      { key: "1", label: <a>한국어</a> },
      { key: "2", label: <a>영어</a> },
    ],
  };

  const isTop = scrollY === 0 ? "white" : "black";
  const accessToken = useSelector((state: any) => state.auth.accessToken);
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
