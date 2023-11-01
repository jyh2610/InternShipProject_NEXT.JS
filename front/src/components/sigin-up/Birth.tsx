import React from "react";

import { ConfigProvider, DatePicker, Form } from "antd";
import moment from "moment";
import "moment/locale/ko";
import locale from "antd/lib/locale/ko_KR";
//moment.locale("ko");
export interface ValidProps {
  validateSelect: (_: unknown, value: string | number) => Promise<void>;
  ko_KR: string;
}
function Birth({ validateSelect }: ValidProps) {
  // 영어 로케일 비활성화
  //moment.updateLocale("en", null);
  moment.locale("ko");
  return (
    <ConfigProvider locale={locale}>
      <Form.Item
        rules={[
          {
            required: true,
            message: "생년월일을 선택해주세요.",
          },
          {
            validator: validateSelect,
          },
        ]}
        name="birthday"
        label="생년월일"
      >
        <DatePicker placeholder="생년월일" style={{ cursor: "pointer", width: "15%", padding: "0.5rem 0.8rem" }} />
      </Form.Item>
    </ConfigProvider>
  );
}

export default Birth;
