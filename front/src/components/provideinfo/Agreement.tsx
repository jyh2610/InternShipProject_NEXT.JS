import React, { useState } from "react";

import { Checkbox } from "antd";

const Agreement = ({ type }) => {
  const [checkOne, setCheckOne] = useState(false);
  const [checkTwo, setCheckTwo] = useState(false);
  const [checkThree, setCheckThree] = useState(false);

  const handleChange = () => {
    switch (type) {
      case "checkOne":
        setCheckOne(!checkOne);
        break;
      case "checkTwo":
        setCheckTwo(!checkTwo);
        break;
      case "checkThree":
        setCheckThree(!checkThree);
        break;
      default:
        // Handle the default case or do nothing
        break;
    }
  };

  return (
    <>
      <Checkbox
        className="justify-end block my-3"
        checked={type === "checkOne" ? checkOne : type === "checkTwo" ? checkTwo : checkThree}
        onChange={handleChange}
      >
        아키플 2.0 서비스 이용약관에 동의합니다.
      </Checkbox>
    </>
  );
};

export default Agreement;
