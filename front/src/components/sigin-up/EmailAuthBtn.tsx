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
  isActive,
}: {
  emailformValue: string;
  emailbtn: boolean;
  setEmailbtn: any;
  setConfirmbtn: any;
  confirmbtn: boolean;
  setIsActive: any;
  isActive: boolean;
}) => {
  const api = new baseApi();
  console.log(emailformValue);
  const sendingCode = async () => {
    const res: emailres = await api.post({
      url: "validate/sendemail",
      body: {
        email: emailformValue,
      },
    });
    console.log(res, "______");
    console.log(res, "이메일 응답");
    if (res?.success) {
      setIsActive(true);
      setConfirmbtn(true);
      setEmailbtn(true);
      setTimeout(() => {
        setEmailbtn(false);
      }, 6000);
    }
  };
  return (
    <div>
      {" "}
      <Button style={{ height: "auto", padding: "0.5rem 0.8rem" }} disabled={emailbtn} onClick={sendingCode}>
        이메일 인증
      </Button>
    </div>
  );
};

export default EmailAuthBtn;
