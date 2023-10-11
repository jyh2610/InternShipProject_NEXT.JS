"use client";

import { loginObj } from "@/constants/constants";
import { signIn, signOut, useSession } from "next-auth/react";
import "../../../public/assets/kakao.svg";
function LoginBtn() {
  const { data: session } = useSession();
  const jwt = require("jsonwebtoken");

  return (
    <>
      {loginObj.map((data) => (
        <button className=" text-white font-bold h-screen py-2 px-4  rounded" key={data.social} type="button" onClick={() => signIn(data.social)}>
          <img src={data.icon} alt="아이콘" />
          {data.social}
        </button>
      ))}
    </>
  );
}

export default LoginBtn;
