"use client";
import React from "react";
import { Checkbox } from "antd";

import { setCheckedThird } from "@/redux/slicer/authSlice";
import { useAppDispatch } from "@/redux/hooks";

interface AgreementProps {
  type: "One" | "Two" | "Three";
  setCheck: Function;
  check: {
    one: boolean;
    two: boolean;
    three: boolean;
  };
}

const Agreement = ({ type, check, setCheck }: AgreementProps) => {
  const dispatch = useAppDispatch();

  const handleChange = () => {
    if (type === "One") {
      setCheck({ ...check, one: !check.one });
    } else if (type === "Two") {
      setCheck({ ...check, two: !check.two });
    } else {
      setCheck({ ...check, three: !check.three });
    }
  };
  dispatch(setCheckedThird(check.three));
  console.log(check.three, "_____________세번째동의");
  return (
    <>
      <Checkbox
        className="flex justify-end block sign-checkbox"
        checked={type === "One" ? check.one : type === "Two" ? check.two : check.three}
        onChange={handleChange}
      >
        {`아키플 2.0 서비스 이용약관에 동의합니다`}
      </Checkbox>
    </>
  );
};

export default Agreement;
