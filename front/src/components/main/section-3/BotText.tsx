function BotText() {
  return (
    <div className="mx-auto mainwidth" data-aos="fade-up" data-aos-offset="300" data-aos-delay="50">
      <div className="flex justify-between pb-20">
        <div
          className="text-4xl"
          style={{
            lineHeight: "3rem",
            color: "#9D9D9D",
            fontWeight: "300",
          }}
        >
          <p>아키플2.0은</p>
          <p
            style={{
              color: "#434343",
              fontWeight: "700",
            }}
          >
            빠르고, 정확합니다.
          </p>
        </div>
        <div className="font-light text-font-gray leading-[2.2rem] text-[1.4rem] " style={{ maxWidth: "580px" }}>
          <p>
            아키플 스튜디오 2.0은 언리얼 엔진을 이용해 개발 되었습니다.{" "}
            <span className="font-bold text-font-darkBlack block">
              빠른 속도로 재질, 가구 등 다양한 아이템을 가상현실에{" "}
              <span className="font-light text-font-gray">적용하여, 여러분의 소중한 공간을 디자인 해드립니다.</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BotText;
