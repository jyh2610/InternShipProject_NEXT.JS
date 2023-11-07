import React from "react";

import { Space } from "antd";
import FindInput from "./FindInput";
import EmailForm from "./EmailForm";
import VertifyCode from "./VertifyCode";

import type { Email } from "./Findlayout";

interface FindInfoType {
  type: string;
  email: Email;
  setEmail: Function;
  setCheckID: Function;
  checkID: boolean;
}

function FindPW({ type, email, setEmail, setCheckID, checkID }: FindInfoType) {
  const formSubmitHandler = () => {
    checkID && email && setCheckID(true);
  };
  return (
    <Space className="w-full">
      <div>
        <div className="find-text-box">
          <p className="find-tit">등록 된 이메일로 찾기</p>
          <p className="find-text">가입 시 입력한 이메일을 통해 인증 후 비밀번호를 재설정해주세요. </p>
        </div>
        <div className="find-from-wrap">
          {type === "pw" ? <FindInput name={"아이디"} classData={"id"} /> : <FindInput name={"이름"} classData={"name"} />}
          <EmailForm email={email} setEmail={setEmail} />
          <VertifyCode setCheckID={setCheckID} email={email} />
        </div>
        <button className="completion-btn" onClick={formSubmitHandler}>
          확인
        </button>
      </div>
    </Space>
  );
}

export default React.memo(FindPW);
