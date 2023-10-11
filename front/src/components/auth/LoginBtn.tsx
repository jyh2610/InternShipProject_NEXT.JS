"use client";

import { loginObj } from "@/constants/constants";
import { signIn, signOut, useSession } from "next-auth/react";
import "../../../public/assets/kakao.svg";
function LoginBtn() {
  const { data: session } = useSession();
  const jwt = require("jsonwebtoken");

  return session ? (
    <button onClick={() => signOut()}>{session.user?.name}님 로그아웃</button>
  ) : (
    <>
      {loginObj.map((data) => (
        <img key={data.name} onClick={() => signIn(data.social)} src={`../../../public/assets/${data.social}.svg`} alt={data.name} />
      ))}
    </>
  );
}

export default LoginBtn;
