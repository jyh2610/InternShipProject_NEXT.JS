import { Button, ConfigProvider } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const AgreementBtn = () => {
  const route = useRouter();
  const clickSignup = () => {
    route.push("/signup/clientinfo");
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
      <div className="flex justify-center my-5">
        <Button className="px-[2.1rem] py-[0.8rem]" onClick={clickCancel} style={{ lineHeight: 0, backgroundColor: "#EFEFEF" }} type="link" htmlType="submit">
          취소
        </Button>
        <Button style={{ lineHeight: 0 }} type="primary" onClick={clickSignup} className="px-[2.1rem] py-[0.8rem]">
          다음
        </Button>
      </div>
    </ConfigProvider>
  );
};

export default AgreementBtn;
