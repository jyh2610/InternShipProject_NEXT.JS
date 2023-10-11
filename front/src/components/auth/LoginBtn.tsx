"use client";

import { loginObj } from "@/constants/constants";
import { signIn, signOut, useSession } from "next-auth/react";
import kakao from "../../../public/assets/kakao.svg";
import naver from "../../../public/assets/naver.svg";
import google from "../../../public/assets/google.svg";
function LoginBtn() {
  const { data: session } = useSession();
  const jwt = require("jsonwebtoken");

  return (
    <>
      {loginObj.map((data) => (
        <img key={data.name} onClick={() => signIn(data.social)} src={data.icon} alt={data.name} />
      ))}
    </>
  );
}

export default LoginBtn;
