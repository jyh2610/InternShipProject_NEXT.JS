import React from "react";
import Birth from "./Birth";
import Sex from "./Sex";
import TestPassword from "./TestPassword";

const SelectValidationAndPassword = () => {
  const validateSelect = (_: unknown, value: string | number) => {
    return new Promise<void>((resolve, reject) => {
      if (value === undefined) {
        reject("선택해야 합니다.");
      } else {
        resolve();
      }
    });
  };
  return (
    <>
      <TestPassword />
      <Birth validateSelect={validateSelect} ko_KR={""} />
      <Sex validateSelect={validateSelect} ko_KR={""} />
    </>
  );
};

export default SelectValidationAndPassword;
