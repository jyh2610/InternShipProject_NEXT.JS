import { dummyData } from "@/constants/constants";
import Line from "../verticalline/Line";

function SliderIdx({ idx }: { idx: number }) {
  return (
    <div className="flex  items-center flex-col h-full w-40">
      {dummyData.map((_, index) =>
        idx === index ? (
          <div>
            <span className="font-bold text-5xl">{index + 1}</span>
            {index !== dummyData.length - 1 && index !== 3 && <Line width={0.5} height={20} />}
          </div>
        ) : (
          <div>
            <span className="text-2xl">{index + 1}</span>
            <Line width={0} height={20} />
          </div>
        ),
      )}
    </div>
  );
}

export default SliderIdx;
