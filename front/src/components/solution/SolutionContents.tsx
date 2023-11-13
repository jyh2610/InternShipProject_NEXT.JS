"use client";

import { useState } from "react";

import TextDivider from "./TextDivider";

function SolutionContents() {
  const [renderImg, setRenderImg] = useState(1);
  const texts = [
    "드래그 앤 드롭 작업 외에도 아키플은 10 개의 지능형 모듈을 제공하여 세부 사항까지 디자인을 사용자 정의 할 수 있습니다. 다양한 수납 조합, 복잡한 타일, 다층 천장, 복잡한 외장 구조를 쉽게 편집할 수 있습니다.",
    "아키플은 몇 분 안에 멋진 4K 렌더링을 제공합니다. 모든 것이 클라우드에서 이루어지므로 하드웨어 설정에 대해 걱정할 필요가 없습니다. 파노라마와 워크스루 기능을 추가하여 더욱 매력적으로 만들 수 있습니다.",
    "아키플 라이브러리에는 3,000만 개 이상의 3D 모델과 텍스처가 있으며 인테리어 프로젝트에 필요한 거의 모든 것을 다룹니다. 물론 언제든지 내 컬렉션을 업로드하여 개인 라이브러리를 만들 수 있습니다.",
    "우리는 프로처럼 생각합니다. 아키플은 CAD 도면, 절단 목록, BOM 및 견적을 프로젝트에서 클릭 한 번으로 직접 생성할 수 있습니다. 귀찮은 작업은 당사가 대행하므로, 고객은 디자인에 전념할 수 있습니다. ",
  ];

  const renderImgHandler = (num: number) => {
    setRenderImg(num);
  };

  return (
    <div className="w-full mx-auto">
      <div className="mx-auto pb-8 text-center">
        <p>인테리어 디자이너를 위한</p>
        <p>아키플 스튜디오 2.0</p>
      </div>
      <div className="flex">
        <div className="flex flex-col w-[50%]">
          {texts.map((item, idx) => (
            <div key={idx} onClick={() => renderImgHandler(idx + 1)}>
              <TextDivider key={idx} data={item} />
            </div>
          ))}
        </div>
        <div className="w-[50%] h-[300px] ml-auto">
          <img className="w-full h-full" alt="img" src={`/assets/three_slide_0${renderImg}.png`} />
        </div>
      </div>
    </div>
  );
}

export default SolutionContents;
