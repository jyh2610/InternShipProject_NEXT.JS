"use client";

import { signIn, signOut } from "next-auth/react";

import { loginObj } from "@/constants/constants";

function LoginBtn() {
  return (
    <>
      {loginObj.map((data) => {
        return (
          <div key={data.social}>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              key={data.social}
              type="button"
              onClick={() => signIn(data.social)}
            >
              {data.name}
            </button>
            <button type="button" onClick={() => signOut()}>
              logout
            </button>
          </div>
        );
      })}
    </>
  );
}

export default LoginBtn;
