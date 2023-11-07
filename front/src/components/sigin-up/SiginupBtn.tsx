/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useCallback } from "react";

import { Button, Form } from "antd";

function SiginupBtn({ validateForm }: { validateForm: () => void }) {
  // const clickSignup = useCallback(async () => {
  //   route.push("/signup/sign-complete");
  // }, []);
  const clickBack = useCallback(async () => {
    //route.push("/");
    window.history.back();
  }, []);
  return (
    <div style={{ borderTop: "1px solid #E2E2E2" }}>
      <Form.Item className="flex justify-center">
        <div className="flex gap-[0.3rem] my-[2rem]">
          <Button style={{ padding: "1.2rem 2rem", lineHeight: 0, backgroundColor: "#EFEFEF" }} onClick={clickBack} type="link">
            이전
          </Button>
          <Button style={{ padding: "1.2rem 2rem", lineHeight: 0 }} type="primary" onClick={validateForm} className="px-[2.1rem] py-[2rem]" htmlType="submit">
            회원가입
          </Button>
        </div>
      </Form.Item>
    </div>
  );
}

export default SiginupBtn;
