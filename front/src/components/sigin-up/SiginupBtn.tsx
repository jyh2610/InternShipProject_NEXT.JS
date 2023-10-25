"use client";

import React, { useCallback } from "react";

import { Button, Form } from "antd";
import { useRouter } from "next/navigation";

function SiginupBtn({ validateForm }: { validateForm: () => void }) {
  const route = useRouter();
  const clickSignup = useCallback(async () => {
    route.push("/signup/clientinfo");
  }, []);

  return (
    <Form.Item wrapperCol={{ offset: 8 }}>
      <Button className="px-[2.1rem] py-[0.8rem]" style={{ lineHeight: 0, backgroundColor: "#EFEFEF" }} type="link" htmlType="submit">
        취소
      </Button>
      <Button style={{ lineHeight: 0 }} type="primary" onClick={clickSignup} className="px-[2.1rem] py-[0.8rem]">
        회원가입
      </Button>
    </Form.Item>
  );
}

export default SiginupBtn;
