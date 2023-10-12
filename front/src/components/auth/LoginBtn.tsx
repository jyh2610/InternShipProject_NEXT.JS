"use client";

import { loginObj } from "@/constants/constants";
import { signIn, signOut, useSession } from "next-auth/react";
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
