"use client";
function Title() {
  return (
    <div className="mt-[8.875rem] mb-[4rem]">
      <div className="flex justify-between m_section_tit">
        <div className="w-[100%] md:w-[580px]">
          <div
            className="text-3xl md:text-4xl"
            style={{
              lineHeight: "2.6rem",
              color: "#9D9D9D",
              fontWeight: "300",
            }}
          >
            <div>당신의 공간, 우리의 열정.</div>
            <div
              style={{
                color: "#434343",
                fontWeight: "600",
              }}
            >
              <p> 아키플과 함께 인테리어의세계를 탐험하세요.</p>
            </div>
          </div>
        </div>
        <div className="w-[100%] md:w-[580px] text-[1.125rem] md:text-[1.4rem] py-3 md:py-0 font-light text-font-gray leading-[1.8rem] md:leading-[2.2rem]">
          <p
            className="md:px-[0.2rem] font-medium text-font-darkBlack leading-[1.8rem] md:leading-[2.2rem]"
            style={{
              color: "#9D9D9D",
              fontWeight: "300",
            }}
          >
            쉽고 빠르게 누구나 할 수 있는 3D 인테리어 솔루션
            <span className="px-1 md:px-[0]" style={{ color: "#434343", fontWeight: "700" }}>
              아키플 2.0은 차별화 된 성능을 경험을 하고, 사용자 공간을 미적 감각으로
            </span>
            채워드립니다.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Title;
