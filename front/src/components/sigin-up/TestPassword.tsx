import React from "react";
import dynamic from "next/dynamic";

import Password from "./Password";
import PasswordConfirm from "./PasswordConfirm";

const TestPassword = () => {
  return (
    <>
      <Password />
      <PasswordConfirm />
    </>
  );
};
export default TestPassword;
