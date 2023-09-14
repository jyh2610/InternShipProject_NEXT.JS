"use client";

import { signIn } from "next-auth/react";

import { loginObj } from "@/constants/constants";

function LoginBtn() {
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
