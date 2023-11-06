import React, { useEffect, useState } from "react";

import { Button, Form, Input } from "antd";

import { baseApi } from "@/API/api";

import Timer from "./Timer";
import emailApi from "./EmailApi";
function EmailCode({
  email,
  setIsActive,
  isActive,
  seconds,
  setSeconds,
  setConfirmbtn,
  resSuccess,
  setResSuccess,
}: {
  seconds: number;
  isActive: boolean;
  email: string;
  setSeconds: any;
  setConfirmbtn: any;
  setResSuccess: any;
  resSuccess: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [code, setCode] = useState("");

  const [timestart, setTimestart] = useState(false);
  const startTimer = () => {
    emailApi
      .verifyCode(email, code)
      .then((res) => {
        if (res.success === true) {
          setResSuccess(res.success);
          setTimestart(false);
          setSeconds(-2);
          setIsActive(false);
        }
        if (res.success === false) {
          alert("유효하지 않은 코드입니다.");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // 타이머 감시
  useEffect(() => {
    console.log("Seconds:_________", seconds);
    let timerInterval: any;

    if (seconds > 0) {
      timerInterval = setTimeout(() => {
        setSeconds((prevSeconds: number) => prevSeconds - 1);
      }, 1000);
    } else {
      clearTimeout(timerInterval);
      setTimestart(false);
      setIsActive(false);
    }
    // 컴포넌트가 언마운트될 때 타이머 정리
    return () => {
      clearTimeout(timerInterval);
    };
  }, [seconds]);
  return (
    <>
      {resSuccess ? (
        <>
          <p className="text-[#26AF66] font-bold">인증이 완료되었습니다.</p>
        </>
      ) : (
        <div>
          <Form.Item name="emailcodeinput" rules={[{ required: true, message: "이메일 코드를 입력해주세요" }]}>
            <p className="tex-[26AF66] text-xs font-bold">인증번호가 발송되었습니다.</p>
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
              </Button>{" "}
            </div>
          </Form.Item>
        </div>
      )}
    </>
  );
}
export default EmailCode;
