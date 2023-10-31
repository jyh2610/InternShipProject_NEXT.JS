import React from "react";

import { Button, ConfigProvider } from "antd";
import { useRouter } from "next/navigation";

interface AgreementBtnProps {
  check: {
    one: boolean;
    two: boolean;
    three: boolean;
  };
}

const AgreementBtn = ({ check }: AgreementBtnProps) => {
  const route = useRouter();
  const clickSignup = () => {
    if (check.one && check.two && check.three) {
      route.push("/signup/clientinfo");
    } else {
      alert("필수 동의항목을 확인해 주세요.");
    }
  };

  const clickCancel = () => {
    route.push("/");
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#26AF66",
          colorLink: "#000",
          borderRadius: 2,
        },
      }}
    >
      <div className="flex justify-center py-[2rem] gap-[0.5rem]">
        <Button onClick={clickCancel} style={{ padding: "1.2rem 2rem", lineHeight: 0, backgroundColor: "#EFEFEF" }} type="link" htmlType="submit">
          취소
        </Button>
        <Button style={{ padding: "1.2rem 2rem", lineHeight: 0 }} type="primary" onClick={clickSignup}>
          다음
        </Button>
      </div>
    </ConfigProvider>
  );
};

export default AgreementBtn;
