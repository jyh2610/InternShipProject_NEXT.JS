import { Button } from "antd";
import React from "react";

const LoginButton = () => {
  return (
    <div>
      {" "}
      <Button type="primary" style={{ padding: "2rem 16px", lineHeight: 0.5 }} htmlType="submit" className="login-form-button" block>
        로그인
      </Button>
    </div>
  );
};

export default LoginButton;
