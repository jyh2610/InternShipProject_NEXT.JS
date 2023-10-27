import React, { useState } from "react";

import { Button, Input } from "antd";

import { baseApi } from "@/API/api";

import Timer from "./Timer";

function EmailCode({ email, setIsActive, isActive }: { isActive: boolean; email: string; setIsActive: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [code, setCode] = useState("");
  const [seconds, setSeconds] = useState(180);
  const api = new baseApi();
  const startTimer = () => {
    setSeconds(180);
    api.post({
      url: "/validate/verifycode",
      body: {
        email: email,
        code: code,
      },
    });
  };

  return (
    <div className="flex gap-[0.3rem]">
      <Input
        style={{ padding: "0.5rem 0.8rem", width: "280px" }}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        name="code"
        suffix={<Timer setSeconds={setSeconds} setIsActive={setIsActive} isActive={isActive} seconds={seconds} />}
      />
      <Button style={{ height: "auto", padding: "0.5rem 0.8rem" }} onClick={startTimer}>
        인증하기
      </Button>
    </div>
  );
}

export default EmailCode;
