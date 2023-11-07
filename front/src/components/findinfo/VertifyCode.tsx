import { verifyCode } from "@/lib/EmailApi";
import React, { useState } from "react";

function VertifyCode({ email }: { email: string }) {
  const [code, setCode] = useState("");
  const btnHandler = (e: { target: { value: React.SetStateAction<string> } }) => {
    setCode(e.target.value);
  };
  const sendingCode = () => {
    verifyCode(email, code);
  };
  return (
    <form className="certified findinput">
      <label htmlFor="인증번호">인증번호</label>
      <div className="w-full">
        <div className="ce-code">
          <input onChange={btnHandler} type="number" id="num" name="인증번호" />
          <button className="code-cp-btn" onClick={sendingCode}>
            인증하기
          </button>
        </div>
        <span className="alert-text">인증번호를 넣어주세요.</span>
        <span className="completion alert-text">인증되셨습니다.</span>
      </div>
    </form>
  );
}

export default VertifyCode;
