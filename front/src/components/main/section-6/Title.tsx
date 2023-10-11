"use client";
function Title() {
  return (
    <div className="mt-[8.875rem] mb-[4rem]">
      <div className="flex justify-between">
        <div className="">
          <div className="text-4xl"
            style={{
              lineHeight:"3rem",
              color:"#9D9D9D",
              fontWeight:"300",
            }}>
            <div>당신의 공간, 우리의 열정.</div>
            <div 
              style={{
                color:"#434343",
                fontWeight:"600",
              }}
              >아키플과 함께 인테리어의세계를<br></br> 탐험하세요.</div>
          </div>
        </div>
        <div className="">
            <p style={{
              color:"#9D9D9D",
              fontSize:"1.5rem",
              lineHeight:'2.2rem',
              fontWeight:"300",
            }}>
            쉽고 빠르게 누구나 할 수 있는 3D 인테리어 솔루션<br></br>
            <span
            style={{color:"#434343",fontWeight:"600",}}>아키플 2.0은 차별화 된 성능을 경험을 하고, 사용자
            공간을<br></br>미적 감각으로</span> 채워드립니다.</p>
        </div>
      </div>
    </div>
  );
}
export default Title;
