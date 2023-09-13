"use client";

import { signIn } from "next-auth/react";

function NaverLogin() {
  return (
    <>
      <button type="button" onClick={() => signIn("naver")}>
        naver login
      </button>
    </>
  );
}

export default NaverLogin;
