import React from "react";

import { ConfigProvider, Select, Space } from "antd";

import { domainData } from "@/constants/constants";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

function FindPW() {
  return (
    <Space className="w-full">
      <div>
        <div className="find-text-box">
          <p className="find-tit">등록 된 이메일로 찾기</p>
          <p className="find-text">가입 시 입력한 이메일을 통해 인증 후 비밀번호를 재설정해주세요. </p>
        </div>
        <div className="find-from-wrap">
          <form className="id findinput">
            <label htmlFor="아이디">아이디</label>
            <input type="text" id="id" name="아이디" />
          </form>
          <form className="name findinput">
            <label htmlFor="이름">이름</label>
            <input type="text" id="Name" name="이름" />
          </form>
          <form className="emall findinput">
            <label htmlFor="이메일">이메일</label>
            <div className="emall-select">
              <input type="emall" id="emall" name="이메일" />
              <p className="font-bold text-[1rem] text-[#bfbfbf]">@</p>
              <ConfigProvider
                theme={{
                  components: {
                    Select: {
                      selectorBg: "#F7F7F7",
                      colorBorder: "none",
                    },
                  },
                  token: {
                    borderRadius: 0,
                    controlHeight: 40,
                    colorPrimaryHover: "transparent",
                    controlOutline: "transparent",
                  },
                }}
              >
                <Select
                  className="ant-select-custom"
                  style={{ width: "50%", outline: "none" }}
                  defaultValue="직접입력"
                  onChange={handleChange}
                  options={domainData}
                />
              </ConfigProvider>
            </div>
          </form>
          <form className="certified findinput">
            <label htmlFor="인증번호">인증번호</label>
            <div className="w-full">
              <div className="ce-code">
                <input type="number" id="num" name="인증번호" />
                <button className="code-cp-btn" type="submit">
                  인증하기
                </button>
              </div>
              <span className="alert-text">인증번호를 넣어주세요.</span>
              <span className="completion alert-text">인증되셨습니다.</span>
            </div>
          </form>
        </div>
        <button className="completion-btn">확인</button>
      </div>
    </Space>
  );
}

export default FindPW;
