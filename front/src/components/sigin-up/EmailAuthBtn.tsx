import { Button } from "antd";
import React, { useEffect } from "react";
import { sendEmail } from "./EmailApi";

interface emailres {
  success: boolean;
  message: string;
}
const EmailAuthBtn = ({
  emailformValue,
  emailbtn,
  setEmailbtn,
  setConfirmbtn,
  setSeconds,
  Seconds,
}: {
  emailformValue: string;
  emailbtn: boolean;
  setEmailbtn: React.Dispatch<React.SetStateAction<boolean>>;
  setConfirmbtn: React.Dispatch<React.SetStateAction<boolean>>;
  confirmbtn: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  isActive: boolean;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
  Seconds: number;
}) => {
  const sendingCode = async () => {
    sendEmail(emailformValue).then((res: emailres) => {
      if (res.success) {
        setConfirmbtn(true);
        setSeconds(180);
        setEmailbtn(true);
        setTimeout(() => {
          setEmailbtn(false);
        }, 6000);
      }
      if (res.message === "DUPLICATE_EMAIL") {
        alert("이미 가입된 이메일 입니다.");
      }
    });
  };
  useEffect(() => {
    if (Seconds === 0) {
      alert("이메일 인증시간이 만료되었습니다.");
      setConfirmbtn(false);
    }
  }, [Seconds]);
  return (
    <div>
      <Button style={{ height: "auto", padding: "0.5rem 0.8rem" }} disabled={emailbtn} onClick={sendingCode}>
        이메일 인증
      </Button>
    </div>
  );
};

export default EmailAuthBtn;
