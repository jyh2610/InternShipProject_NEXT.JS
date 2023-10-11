import { Button } from "antd";

function BothSliderBtn({ prevRef, nextRef }: { prevRef: any; nextRef: any }) {
  return (
    <div className="w-20">
      <Button ref={prevRef} type="text">
        이전
      </Button>
      <Button ref={nextRef} type="text">
        다음
      </Button>
    </div>
  );
}

export default BothSliderBtn;
