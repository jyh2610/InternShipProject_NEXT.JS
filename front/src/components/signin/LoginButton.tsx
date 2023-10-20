import React from "react";

import { Button } from "antd";

const LoginButton = () => {
  return (
    <div>
      <Button type="primary" style={{ padding: "1.7rem 16px", lineHeight: 0 }} htmlType="submit" className="login-form-button" block>
        로그인
      </Button>
    </div>
  );
};

export default LoginButton;
