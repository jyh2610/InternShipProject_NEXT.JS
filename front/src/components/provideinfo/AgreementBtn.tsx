import { Button, ConfigProvider } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

interface AgreementBtnProps {
  setCheck: Function;
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
        <Button className="px-[3rem] py-[0.8rem]" onClick={clickCancel} style={{ lineHeight: 0, backgroundColor: "#EFEFEF" }} type="link" htmlType="submit">
          취소
        </Button>
        <Button style={{ lineHeight: 0 }} type="primary" onClick={clickSignup} className="px-[3rem] py-[0.8rem]">
          다음
        </Button>
      </div>
    </ConfigProvider>
  );
};

export default AgreementBtn;
