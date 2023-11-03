import { baseApi } from "@/API/api";
import { Button } from "antd";
import React from "react";
interface emailres {
  success: boolean;
}
const EmailAuthBtn = ({
  emailformValue,
  emailbtn,
  setEmailbtn,
  setConfirmbtn,
  setIsActive,
  setSeconds,
}: {
  emailformValue: string;
  emailbtn: boolean;
  setEmailbtn: any;
  setConfirmbtn: any;
  confirmbtn: boolean;
  setIsActive: any;
  isActive: boolean;
  setSeconds: any;
}) => {
  const api = new baseApi();
  //console.log(emailformValue);
  const sendingCode = async () => {
    const res: emailres = await api.post({
      url: "validate/sendemail",
      body: {
        email: emailformValue,
      },
    });
    console.log(res, "이메일 응답코드");
    if (res?.success) {
      setConfirmbtn(true);
      setSeconds(180);
      setEmailbtn(true);
      setTimeout(() => {
        setEmailbtn(false);
      }, 6000);
      setTimeout(() => {
        setConfirmbtn(false);
        alert("이메일 인증시간이 만료되었습니다.");
      }, 183000);
    }
  };
  return (
    <div>
      <Button style={{ height: "auto", padding: "0.5rem 0.8rem" }} disabled={emailbtn} onClick={sendingCode}>
        이메일 인증
      </Button>
    </div>
  );
};

export default EmailAuthBtn;
