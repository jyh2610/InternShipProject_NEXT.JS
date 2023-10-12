import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

function BothSliderBtn({ prevRef, nextRef }: { prevRef: any; nextRef: any }) {
  return (
    <div className="flex justify-start gap-3 pl-10">
      <div ref={prevRef}>
        <BsArrowLeft className="text-4xl  p-1 bg-bg-gray" />
      </div>
      <div ref={nextRef}>
        <BsArrowRight className="text-4xl p-1  bg-bg-gray" />
      </div>
    </div>
  );
}

export default BothSliderBtn;
