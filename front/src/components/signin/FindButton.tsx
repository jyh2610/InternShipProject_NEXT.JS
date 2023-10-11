import React from "react";

const FindButton = () => {
  return (
    <div>
      <div className="flex justify-around">
        <div>
          <a className="login-form-forgot text-[#000]" href="">
            아이디 찾기 |
          </a>
        </div>
        <div className="">
          <a className="login-form-forgot text-[#000]" href="">
            비밀번호 찾기 |
          </a>
        </div>
        <div className="">
          <a href="" className="text-[#000]">
            회원가입
          </a>
        </div>
      </div>
    </div>
  );
};

export default FindButton;
