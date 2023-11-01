import React, { useEffect, useState } from "react";

import { Button, Input } from "antd";

import { baseApi } from "@/API/api";

import Timer from "./Timer";

function EmailCode({ email, setIsActive, isActive }: { isActive: boolean; email: string; setIsActive: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [code, setCode] = useState("");
  const [seconds, setSeconds] = useState(180);
  const [resSuccess, setResSuccess] = useState("");
  const [timestart, setTimestart] = useState(false);
  const api = new baseApi();
  const startTimer = () => {
    setTimestart(true);
    // 이미 타이머가 시작 중이라면 무시
    if (timestart) {
      return;
    }
    setSeconds(180);
    api
      .post({
        url: "/validate/verifycode",
        body: {
          email: email,
          code: code,
        },
      })
      .then((res) => {
        console.log(res.success);
        setResSuccess(res.success);
      });
  };

  // 타이머 감시
  useEffect(() => {
    startTimer();
    let timerInterval: any;

    if (seconds > 0) {
      timerInterval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else {
      clearInterval(timerInterval);
      setTimestart(false); // 타이머 종료 상태로 설정
    }

    // 컴포넌트가 언마운트될 때 타이머 정리
    return () => {
      clearInterval(timerInterval);
    };
  }, [seconds]);
  return (
    <>
      {resSuccess ? (
        <>
          <p className="text-[#26AF66] font-bold">인증이 완료되었습니다.</p>
        </>
      ) : (
        <>
          <p className="text-[#26AF66] text-xs font-bold">인증번호가 발송되었습니다.</p>
          <div className="flex gap-[0.3rem]">
            <Input
              style={{ width: "300px", padding: "0.5rem 0.8rem" }}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              name="code"
              suffix={<Timer setSeconds={setSeconds} setIsActive={setIsActive} isActive={isActive} seconds={seconds} />}
            />
            <Button style={{ height: "auto", padding: "0.5rem 0.8rem" }} onClick={startTimer}>
              인증하기
            </Button>
          </div>
        </>
      )}
    </>
  );
}
export default EmailCode;
