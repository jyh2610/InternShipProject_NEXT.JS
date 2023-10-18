import React, { useState } from "react";

import { Button, Input } from "antd";

import Timer from "./Timer";

function EmailCode() {
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(180); // 3분 타이머, 60초 * 3분

  const startTimer = () => {
    setIsActive(true);
    setSeconds(180);
  };

  return (
    <>
      <Input
        style={{ width: "300px" }}
        name="code"
        suffix={<Timer setSeconds={setSeconds} setIsActive={setIsActive} isActive={isActive} seconds={seconds} />}
      />
      <Button onClick={startTimer}>인증하기</Button>
    </>
  );
}

export default EmailCode;
