import React from "react";

function SubHeader() {
  return (
    <div className="top_section">
      <div className="mainwidth mx-auto h-[100%] relative">
        <div className="page-text">
          <div className="text-layout" data-aos="fade-up" data-aos-delay="80">
            <h4 className="page-tit">
              인테리어 디자이너를 위한
              <br />
              <span className="font-bold">아키플 스튜디오 2.0</span>
            </h4>
            <p className="page-copylight">
              창의성과 전문 지식이 결합된 프로페셔널리즘의 확실한 선택입니다.
              <br />
              우리는 인테리어 디자이너들이 더 나은 디자인을 구현하고 클라이언트의 기대를 뛰어넘을 수 있도록 돕습니다. 우리와 함께하면 창의성을 발휘하며
              프로젝트를 성공적으로 완료할 수 있습니다. 전문 설계사와 함께하는 경험을 즐기세요.
            </p>
          </div>
          {/* <Link href={"https://installer.launcher.xsolla.com/xlauncher-builds/xsolla-launcher-update/5982/bin/web_installer.exe"}>
            <button className="down-btn">
              <span>
                <i className="down-icon">
                  <CloudDownloadOutlined />
                </i>
                다운로드
              </span>
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
