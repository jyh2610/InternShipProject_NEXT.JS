import { dummyData } from "@/constants/constants";

function SliderIdx({ idx }: { idx: number }) {
  return (
    <div className="flex  items-center flex-col h-full w-40">
      {dummyData.map((_, index) =>
        idx === index ? (
          <div>
            <span className="font-bold text-5xl">{index + 1}</span>
            {index !== dummyData.length - 1 && index !== 3 && <div className={`bg-bg-gray h-20 w-0.5 mx-auto`} />}
          </div>
        ) : (
          <div>
            <span className="text-2xl">{index + 1}</span>
            <div className={`bg-bg-gray h-20 w-0 mx-auto`} />
          </div>
        ),
      )}
    </div>
  );
}

export default SliderIdx;
