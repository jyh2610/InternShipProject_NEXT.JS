import React from "react";

import "./style.css";
import { CloudDownloadOutlined } from "@ant-design/icons";
import Link from "next/link";
import FadeProvider from "@/components/FadeProvider";

function Download() {
  return (
    <FadeProvider>
      <div className="wrap">
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
        <div className="container_section">
          <div className="guide">
            <div className="mainwidth mx-auto">
              <div className="section-text-wrap" data-aos="fade-up" data-aos-offset="100" data-aos-delay="100">
                <h4 className="section-tit">인테리어는 당연히 쉽고 편해야죠</h4>
                <p className="section-text">아키플 스튜디오를 사용하는 모두를 위해</p>
              </div>
              <div className="item-list">
                <ul className="item-wrap">
                  <li className="item" data-aos="fade-up" data-aos-offset="150" data-aos-delay="100">
                    <div className="item-tit">
                      <span className="badge marketing">마케팅</span>
                      <h3>고객의 다양한 니즈에 맞게 원하는 디자인을 빠르게 제공</h3>
                    </div>
                    <div className="item-text">
                      <p>고객의 니즈를 파악하여, 사실적인 텍스쳐로 고객의 생각을 시각적으로 볼 수 있도록 제공 합니다.</p>
                    </div>
                  </li>
                  <li className="item" data-aos="fade-up" data-aos-offset="150" data-aos-delay="200">
                    <div className="item-tit">
                      <span className="badge partner">파트너</span>
                      <h3>당신만의 소중한 제품을 가상현실 환경에서도 제공</h3>
                    </div>
                    <div className="item-text">
                      <p>기존 형식의 온라인 판매가 아닌 가상현실에서 유저가 사용해보며 실 구매회전율 상승.</p>
                    </div>
                  </li>
                  <li className="item" data-aos="fade-up" data-aos-offset="150" data-aos-delay="300">
                    <div className="item-tit">
                      <span className="badge user">유저</span>
                      <h3>나만의 공간디자인을 많은 유저들에게 공유하여, 나만의 포트폴리오</h3>
                    </div>
                    <div className="item-text">
                      <p>나만의 공간디자인을 전 세계 사람들과 공유하여, 나만의 포트폴리오를 제작해보세요.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom_section">
          <div className="mainwidth mx-auto">
            <div className="section-text-wrap pt-[10rem] pb-[3rem]" data-aos="fade-up" data-aos-offset="200" data-aos-delay="100">
              <h4 className="section-tit">빠르고 간단하게 설치해야죠.</h4>
              <p className="section-text">설치방법 안내</p>
            </div>
          </div>
          <div className="install-list">
            <div className="install-01-wrap" data-aos="fade-up" data-aos-offset="230" data-aos-delay="230">
              <div className="install-text">
                <p>
                  <span className="install-num">01</span>
                  다운로드 버튼을 눌러 아키플 스튜디오 2.0 설치파일을 받으세요.
                </p>
              </div>
              <div className="install_01">
                <div className="bottom-text">
                  <div className="text-center">
                    <h4 className="bottom-text-tit">아키플 스튜디오 2.0 클라이언트 다운로드</h4>
                    <p className="bottom-copylight">프로그램 실행을 위해 클라이언트를 다운로드하여 설치하시기 바랍니다.</p>
                  </div>
                  <div className="bottom-dw-btn">
                    <Link href={"https://installer.launcher.xsolla.com/xlauncher-builds/xsolla-launcher-update/5982/bin/web_installer.exe"}>
                      <button className="down-btn">
                        <span>
                          <i className="down-icon">
                            <CloudDownloadOutlined />
                          </i>
                          Widow 다운로드
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="install-list">
            <div className="install-02-wrap" data-aos="fade-up" data-aos-offset="100" data-aos-delay="100">
              <div className="install-text">
                <p>
                  <span className="install-num">02</span>
                  실행 런처 다운로드 방법.
                </p>
              </div>
              <div className="install_02">
                <ul className="install-item-list">
                  <li className="install-item">
                    <div className="img-wrap">
                      <img
                        src="https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaCpOo1I10Tgoh8eSUG0eUOWdQzqaCZnqe4BGDuCqKx7iHrG8ZPVsgS7QN-VXCLCYzXNpuz6O9ibSwf-HnMIw-S97ObJ=w1920-h888"
                        alt="런처 설치방법 첫 번째"
                      />
                    </div>
                    <div className="item-txt">
                      <p>01) 다운받은 런처 설치 파일을 실행합니다.</p>
                    </div>
                  </li>
                  <li className="install-item">
                    <div className="img-wrap">
                      <img
                        src="https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaCmxRHdX-2YW2b4smnP3xQ5IaDzv5CDWKNuRxFMqBs9K7U7trp6mFgCAjXOtiKOxBjrJI80_atqaJ2cGyh36srBG0LBKg=w1920-h888"
                        alt="런처 설치방법 두 번째"
                      />
                    </div>
                    <div className="item-txt">
                      <p>02) 설치할 경로를 지정하고 Install 버튼을 누릅니다.</p>
                    </div>
                  </li>
                  <li className="install-item">
                    <div className="img-wrap">
                      <img
                        src="https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaCYiw_8_ANPaInQHILOoJUoUyrIoNZBN3O-Qe45urDuyrP9Ms9Sf4EKbY8bXHjEmMxuiPrzXjq7BjlXhoKG_s5gXhCw=w1920-h888"
                        alt="런처 설치방법 세 번째"
                      />
                    </div>
                    <div className="item-txt">
                      <p>03) 설치가 완료될 때까지 대기 합니다.</p>
                    </div>
                  </li>
                  <li className="install-item">
                    <div className="img-wrap">
                      <img
                        src="https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaCIkyD2ak7PRVID3meEJusdHdInQV8l0NdNGvM4H0UAFYhGhLSpxGg-xkuNoRCXtPRQL2KTtz3Ipzo3Uk_zgID4eJFuCw=w1920-h888"
                        alt="런처 설치방법 네 번째"
                      />
                    </div>
                    <div className="item-txt">
                      <p>04) finish 버튼을 누르면 런처 설치가 완료 됩니다.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="install-list">
            <div className="install-03-wrap" data-aos="fade-up" data-aos-offset="150" data-aos-delay="150">
              <div className="install-text">
                <p>
                  <span className="install-num">03</span>
                  아키플 스튜디오 설치 방법.
                </p>
              </div>
              <div className="install_03">
                <ul className="install-item-list">
                  <li className="install-item">
                    <div className="img-wrap">
                      <img
                        src="https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaAKrUvbQlLUf6hCCtmsEaqCKaq1YvML8ijCKi-lIPiW9TOsT6hgP5EttL8PmFPmrgLBD--uEd0d9JWAtdDt7lcRzzzSnQ=w1920-h888"
                        alt="아키플 스튜디오 설치 첫 번째"
                      />
                    </div>
                    <div className="item-txt">
                      <p>01) Archple Studio에 들어가 Intall을 클릭 합니다.</p>
                    </div>
                  </li>
                  <li className="install-item">
                    <div className="img-wrap">
                      <img
                        src="https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaB8bveSohAvToJGS2xpKaNPpadva2Q7wGzfFzVRp504XDwdtGDkpFKqJW2ckoveq2WUXIWn-a4DBG-pTbL9U7ocbB1SdQ=w1920-h888"
                        alt="아키플 스튜디오 설치 두 번째"
                      />
                    </div>
                    <div className="item-txt">
                      <p>02) 설치 경로를 지정하고 설치를 진행 합니다.</p>
                    </div>
                  </li>
                  <li className="install-item">
                    <div className="img-wrap">
                      <img
                        src="https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaACw-s5Nycf8tBfk0eM4vvC9WiZlmEyJH6rrY9KecS-t0urKHfhfwdcsIyQ1SVmy5050_gC816GO05I9SjvaDLKtkxi=w1920-h888"
                        alt="아키플 스튜디오 설치 세 번째"
                      />
                    </div>
                    <div className="item-txt">
                      <p>03) Archple Studio 2.0 설치가 완료 되었습니다.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeProvider>
  );
}

export default Download;
