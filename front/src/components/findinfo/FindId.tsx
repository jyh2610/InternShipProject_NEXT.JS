import React from "react";

import { ConfigProvider, Select, Space } from "antd";

import { domainData } from "@/constants/constants";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

function Findid() {
  return (
    <Space className="w-full">
      <div>
        <div className="find-text-box">
          <h4 className="find-tit">등록 된 이메일로 찾기</h4>
          <p>가입 시 입력한 이메일을 통해 인증 후 아이디를 확인 해주세요. </p>
        </div>
        <div className="find-from-wrap">
          <form className="name findinput">
            <label htmlFor="이름">이름</label>
            <input type="text" id="Name" name="이름" />
          </form>
          <form className="emall findinput">
            <label htmlFor="이메일">이메일</label>
            <div className="emall-select">
              <input type="emall" id="emall" name="이메일" />
              <p className="font-bold text-[1rem]">@</p>
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
        </div>
      </div>
    </Space>
  );
}

export default Findid;
