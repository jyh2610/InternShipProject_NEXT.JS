import { domainData } from "@/constants/constants";
import { Form, Select } from "antd";
import React from "react";

const DomainSelect = ({ selectHandler }: { selectHandler: () => void }) => {
  return (
    <div>
      {" "}
      <Form.Item name="emailDomain" label="" rules={[{ message: "도메인을 선택하거나 입력해 주세요." }]}>
        <Select
          placeholder="직접 입력"
          style={{ height: "2.4rem", marginBottom: "-2rem", padding: "0 0.8rem" }}
          options={domainData}
          onChange={selectHandler}
        />
      </Form.Item>
    </div>
  );
};

export default DomainSelect;
