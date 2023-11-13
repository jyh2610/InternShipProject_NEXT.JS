import { memo, useState } from "react";

import { Space } from "antd";
import { idfind, resetPw } from "@/lib/EmailApi";

import FindInput from "./FindInput";
import EmailForm from "./EmailForm";
import VertifyCode from "./VertifyCode";

import type { Email } from "./Findlayout";
import type { SetStateAction } from "react";

interface FindInfoType {
  type: string;
  email: Email;
  setEmail: Function;
  setCheckID: Function;
  checkID: boolean;
}

function FindPW({ type, email, setEmail, setCheckID }: FindInfoType) {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [Pw, setResetPw] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const returnType = type === "pw" ? "pw" : "id";
  const formSubmitHandler = async () => {
    const newEmail = `${email.id}@${email.domain}`;
    const res = type === "pw" ? await resetPw(name, newEmail, Pw) : await idfind(name, newEmail, code);
    if (res?.sueccess === true) {
      setIsOpen(true);
      setCheckID(true);
    }
  };

  const inputHanlder = (e: { target: { value: SetStateAction<string> } }) => {
    setResetPw(e.target.value);
  };

  return (
    <Space className="w-full">
      <div>
        <div className="find-text-box">
          <p className="find-tit">등록 된 이메일로 찾기</p>
          <p className="find-text">가입 시 입력한 이메일을 통해 인증 후 비밀번호를 재설정해주세요. </p>
        </div>
        <div className="find-from-wrap">
          {type === "pw" ? (
            <FindInput setName={setName} stateName={name} name={"아이디"} classData={"id"} />
          ) : (
            <FindInput setName={setName} stateName={name} name={"이름"} classData={"name"} />
          )}
          <EmailForm email={email} setEmail={setEmail} />
          <VertifyCode setCheckID={setIsOpen} code={code} email={email} setCode={setCode} type={returnType} />
        </div>
        {isOpen && (
          <>
            <input onChange={inputHanlder} value={Pw} />
            <button className="completion-btn" onClick={formSubmitHandler}>
              확인
            </button>
          </>
        )}
      </div>
    </Space>
  );
}

export default memo(FindPW);
