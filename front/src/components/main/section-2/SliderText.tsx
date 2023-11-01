import "./layout.css";

function SliderText() {
  return (
    <div
      className="p-[2rem] pl-[2rem] md:p-[2rem] slide-text-wrap flex justify-center flex-col"
      style={{
        position: "absolute",
        width: "100%",
        maxWidth: "1300px",
        zIndex: "1",
        color: "white",
        bottom: "10%",
        left: "50%",
        transform: "translatex(-50%)",
      }}
    >
      <div>
        <span className="font-bold block pb-4 text-[1.6rem] md:text-[2rem]">현실감 있는 가상 체험</span>
      </div>
      <div>
        <p className="text-[1rem] md:text-[1.2rem] leading-[1.5rem] md:leading-[1.875rem]" style={{ display: "block", maxWidth: "640px", fontWeight: "300" }}>
          아키플 스튜디오 2.0을 통해 고객들은 실제로 거주 공간을 경험하는 것과 유사한 현실감 있는 가상 체험을 할 수 있습니다. 이것은 거주 공간의 디자인과 느낌을
          미리 확인할 수 있어, 고객들이 더 확신을 가지고 결정을 내릴 수 있도록 도와줍니다.
        </p>
      </div>
    </div>
  );
}

export default SliderText;
