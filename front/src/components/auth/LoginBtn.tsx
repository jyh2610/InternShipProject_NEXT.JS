"use client";

import { signIn, signOut, useSession } from "next-auth/react";

import { loginObj } from "@/constants/constants";

function LoginBtn() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <button onClick={() => signOut()}>{session?.user?.name}님 로그아웃</button>
      </>
    );
  }
  return (
    <>
      {loginObj.map((data) => {
        return (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            key={data.social}
            type="button"
            onClick={() => signIn(data.social)}
          >
            {data.name}
          </button>
        );
      })}
    </>
  );
}

export default LoginBtn;