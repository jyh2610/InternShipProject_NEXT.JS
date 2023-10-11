"use client";

import { Layout } from "antd";
import Logo from "./Logo";

function MainFooter() {
  const { Footer } = Layout;

  return (
    <Footer
      style={{
        background: "#2C2C2C",
        color: "#fff",
        padding: "24px",
        marginTop: "6rem",
      }}
    >
      <div className="max-w-[1600px] w-full mx-auto px-8">
        <div className="flex py-2">
          <Logo />
        </div>
        <div className="flex gap-28">
          <div>
            <div className="address mb-4">
              <p className="font-bold text-base">주소</p>
              <div className="text-gray-400 text-sm leading-5">
                경기도 고양시 일산동구 중앙로 1275번길 60-30, 401-2호
                <p>유에이블코퍼레이션</p>
              </div>
            </div>
            <div className="customer mb-4">
              <p className="font-bold text-base">고객문의</p>
              <p className="text-gray-400 text-sm">010-8983-6637</p>
            </div>
            <div className="business mb-4">
              <p className="font-bold text-base">비즈니스 문의</p>
              <p className="text-gray-400 text-sm">admin@uable.co.kr</p>
            </div>
          </div>
          <div className="footer-nav flex gap-12">
            <div>
              <p className="font-bold text-base">회사소개</p>
              <div className="footer-nav-list text-gray-400 text-sm leading-8">
                <a href="#">서비스약관</a>
                <a href="#">개인정보정책</a>
              </div>
            </div>
            <div>
              <p className="font-bold text-base">제품</p>
              <div className="footer-nav-list text-gray-400 text-sm leading-8">
                <a href="#">디자인 & 랜더</a>
                <a href="#">애니메이션</a>
                <a href="#">브랜드갤러리</a>
                <a href="#">디자인 설계 시스템</a>
              </div>
            </div>
            <div>
              <p className="font-bold text-base">솔루션</p>
              <div className="footer-nav-list text-gray-400 text-sm leading-8">
                <a href="#">인테리어 디자인</a>
                <a href="#">가구 브랜드</a>
                <a href="#">제조</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto text-center w-full max-w-[1600px] px-8">
        <hr className="border-gray-500 opacity-50" />
        <div className="py-5 text-sm">
          <p>Copyright © {new Date().getFullYear()} UABLE. All Right Reserve</p>
        </div>
      </div>
    </Footer>
  );
}

export default MainFooter;
