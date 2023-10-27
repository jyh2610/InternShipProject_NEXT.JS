import { usePathname } from "next/navigation";
import React from "react";

function SideHeader() {
  const routes = usePathname();
  return (
    <div className="pt-[133px] pb-[1.4rem]" style={{ borderBottom: "1px solid #E2E2E2" }}>
      <span className="text-[1.8rem] font-bold" style={{ color: "#434343" }}>
        회원가입
      </span>
      {routes === "/signup/clientinfo" && (
        <span className="text-gray-400 text-[0.7rem]">
          <i className="es-icon"></i>표시는 반드시 입력하셔야 하는 항목입니다.
        </span>
      )}
    </div>
  );
}

export default SideHeader;
