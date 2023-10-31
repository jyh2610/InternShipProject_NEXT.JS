import React from "react";

import "./style.css";
import { CloudDownloadOutlined } from "@ant-design/icons";

import Link from "next/link";

function Download() {
  return (
    <>
      <div className="wrap mt-[60px]">
        <div className="top_section">
          <div className="mainwidth mx-auto h-[100%] relative">
            <div className="page-text">
              <div className="text-layout">
                <h4 className="page-tit">
                  인테리어 디자이너를 위한
                  <br />
                  아키플 스튜디오 2.0
                </h4>
                <p className="page-copylight">
                  창의성과 전문 지식이 결합된 프로페셔널리즘의 확실한 선택입니다.
                  <br />
                  우리는 인테리어 디자이너들이 더 나은 디자인을 구현하고 클라이언트의 기대를 뛰어넘을 수 있도록 돕습니다. 우리와 함께하면 창의성을 발휘하며
                  프로젝트를 성공적으로 완료할 수 있습니다. 전문 설계사와 함께하는 경험을 즐기세요.
                </p>
              </div>
              <Link href={"https://installer.launcher.xsolla.com/xlauncher-builds/xsolla-launcher-update/5982/bin/web_installer.exe"}>
                <button className="down-btn">
                  <span>
                    <i className="down-icon">
                      <CloudDownloadOutlined />
                    </i>
                    다운로드
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="container_section">
          <div className="guide">
            <div className="mainwidth mx-auto">
              <div className="section-text-wrap">
                <h4 className="section-tit">인테리어는 당연히 쉽고 편해야죠</h4>
                <p className="section-text">아키플 스튜디오를 사용하는 모두를 위해</p>
              </div>
              <div className="item-list">
                <ul className="item-wrap">
                  <li className="item">
                    <div className="item-tit">
                      <span className="badge marketing">마케팅</span>
                      <h3>고객의 다양한 니즈에 맞게 원하는 디자인을 빠르게 제공</h3>
                    </div>
                    <div className="item-text">
                      <p>고객의 니즈를 파악하여, 사실적인 텍스쳐로 고객의 생각을 시각적으로 볼 수 있도록 제공 합니다.</p>
                    </div>
                  </li>
                  <li className="item">
                    <div className="item-tit">
                      <span className="badge partner">파트너</span>
                      <h3>당신만의 소중한 제품을 가상현실 환경에서도 제공</h3>
                    </div>
                    <div className="item-text">
                      <p>기존 형식의 온라인 판매가 아닌 가상현실에서 유저가 사용해보며 실 구매회전율 상승.</p>
                    </div>
                  </li>
                  <li className="item">
                    <div className="item-tit">
                      <span className="badge user">유저</span>
                      <h3>제목영역</h3>
                    </div>
                    <div className="item-text">
                      <p>리스트 설명 영역</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom_section">하단 텍스트 영역입니다.</div>
      </div>
    </>
  );
}

export default Download;
