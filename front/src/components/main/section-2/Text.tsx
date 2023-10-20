"use client";
import Link from "next/link";

import "./layout.css";

function Text() {
  return (
    <div className="mx-auto mainwidth">
      <div className="m_section_tit flex justify-between pb-20" data-aos="fade-up" data-aos-offset="200" data-aos-delay="50">
        <div
          className="text-4xl"
          style={{
            lineHeight: "3rem",
            color: "#9D9D9D",
            fontWeight: "300",
          }}
        >
          <p>올인원 3D 인테리어</p>
          <p
            style={{
              color: "#434343",
              fontWeight: "700",
            }}
          >
            디자인 도구
          </p>
        </div>
        <div
          className="text-[1.4rem] "
          style={{
            maxWidth: "580px",
          }}
        >
          <div className="font-light text-font-gray leading-[2.2rem]">
            <p>
              아키플 스튜디오 2.0을 통해 고객들은 실제로 거주 공간을 경험하는 것과 유사한 현실감 있는 가상 체험을 할 수 있습니다.
              <span className="px-1 font-bold text-font-darkBlack">
                아키플은 거주 공간의 디자인과 느낌을 미리 확인할 수 있어, 고객들이 더 확신을 가지고 결정을
              </span>
              내릴 수 있도록 도와줍니다.
            </p>
          </div>
          <Link
            href={"/"}
            className="down-btn pt-10 pb-2 text-base"
            style={{
              borderBottom: "1px solid #B2B2B2",
              display: "inline-block",
              paddingRight: "2rem",
              paddingLeft: "0.54rem",
            }}
          >
            <span
              className="text-font-gray flex text-base"
              style={{
                display: "flex",
                gap: "1rem",
              }}
            >
              아키플 스튜디오 2.0 다운로드
              <i className="D-icon flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 27.591 16.682">
                  <g id="그룹_10467" data-name="그룹 10467" transform="translate(5.303 -2.004)">
                    <g id="그룹_10468" data-name="그룹 10468">
                      <path
                        id="패스_82"
                        data-name="패스 82"
                        d="M92.572,1884.555l7.634,7.634-7.634,7.634"
                        transform="translate(-78.918 -1881.844)"
                        fill="none"
                        stroke="#767676"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                      />
                      <path
                        id="패스_7617"
                        data-name="패스 7617"
                        d="M44.591,28H18"
                        transform="translate(-23.303 -17.655)"
                        fill="none"
                        stroke="#767676"
                        strokeWidth="2"
                      />
                    </g>
                  </g>
                </svg>
              </i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Text;
