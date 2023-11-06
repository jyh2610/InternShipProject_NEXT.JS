import React from "react";
import { domainData } from "@/constants/constants";
import { Select } from "antd";
function EmailForm() {
  return (
    <form className="emall findinput">
      <label htmlFor="이메일">이메일</label>
      <div className="emall-select">
        <input type="emall" id="emall" name="이메일" />
        <p className="font-bold text-[1rem] text-[#bfbfbf]">@</p>
        <Select className="ant-select-custom" style={{ width: "50%", outline: "none" }} defaultValue="직접입력" options={domainData} />
      </div>
    </form>
  );
}

export default EmailForm;
