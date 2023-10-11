"use client";

import { signIn, signOut, useSession } from "next-auth/react";

import { loginObj } from "@/constants/constants";

function LoginBtn() {
  const { data: session } = useSession();
  const jwt = require("jsonwebtoken");

  return session ? (
    <button onClick={() => signOut()}>{session.user?.name}님 로그아웃</button>
  ) : (
    <>
      {loginObj.map((data) => (
        <button className=" text-white font-bold py-2 px-4 rounded" key={data.social} type="button" onClick={() => signIn(data.social)}>
          <img src={data.icon} alt="아이콘" />
        </button>
      ))}
    </>
  );
}

export default LoginBtn;
