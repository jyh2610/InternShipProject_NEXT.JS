import React from "react";
import { verifyCode } from "@/lib/EmailApi";
import type { Email } from "./Findlayout";

function VertifyCode({ email, setCheckID, setCode, code, type }: { email: Email; setCheckID: Function; setCode: Function; code: string; type: string }) {
  const btnHandler = (e: { target: { value: React.SetStateAction<string> } }) => {
    setCode(e.target.value);
  };

  const sendingCode = async () => {
    const formattedEmail = `${email.id}@${email.domain}`;
    const res = await verifyCode(formattedEmail, code);
    console.log(res);
    res.success === true ? setCheckID(false) : setCheckID(false);
  };

  return (
    <div className="certified findinput">
      <label htmlFor="인증번호">인증번호</label>
      <div className="w-full">
        <div className="ce-code">
          <input onChange={btnHandler} id="code" name="인증번호" />
          {type === "pw" && (
            <button className="code-cp-btn" onClick={sendingCode}>
              인증하기
            </button>
          )}
        </div>
        <span className="alert-text">인증번호를 넣어주세요.</span>
        <span className="completion alert-text">인증되셨습니다.</span>
      </div>
    </div>
  );
}

export default VertifyCode;
