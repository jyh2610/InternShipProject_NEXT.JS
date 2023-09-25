"use client";
import { Layout } from "antd";

function Footer() {
  const { Footer } = Layout;
  return (
    <div>
      <Footer style={{ background: "#2C2C2C", textAlign: "center", color: "#fff" }}>
        {" "}
        <div className="flex ml-56 space-x-4 ">
          <div>
            <p className="font-bold">주소</p>
            <p className="text-[#9F9F9F] text-[0.875rem]">경기도 고양시 일산동구 중앙로 1275번길 60-30, 401-2호 유에이블코퍼레이션</p>
            <p className="font-bold">고객문의</p>
            <p className="text-[#9F9F9F] text-[0.875rem]">010-8983-6637</p>
            <p className="font-bold">비즈니스 문의</p>
            <p className="text-[#9F9F9F] text-[0.875rem]">admin@uable.co.kr</p>
          </div>
          <div>
            <p className="font-bold">회사소개</p>
            <div className="text-[#9F9F9F] text-[0.875rem]">
              <p>서비스약관</p>
              <p>개인정보정책</p>
            </div>
          </div>
          <div>
            <p className="font-bold">제품</p>
            <div className="text-[#9F9F9F] text-[0.875rem]">
              {" "}
              <p>디자인 & 랜더</p>
              <p>애니메이션</p>
              <p>브랜드갤러리</p>
              <p>디자인 설계 시스템</p>
            </div>
          </div>
          <div>
            <p className="font-bold">솔루션</p>
            <div className="text-[#9F9F9F] text-[0.875rem]">
              <p>인테리어 디자인</p>
              <p>가구 브랜드</p>
              <p>제조</p>{" "}
            </div>
          </div>
        </div>
        Copyright © {new Date().getFullYear()} UABLE. All Right Reserve
      </Footer>
    </div>
  );
}

export default Footer;
