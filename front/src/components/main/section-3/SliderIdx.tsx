import { dummyData } from "@/constants/constants";

function SliderIdx({ idx }: { idx: number }) {
  return (
    <div className="flex  items-center flex-col">
      {dummyData.map((item, index) =>
        idx === index ? (
          <div>
            <span className="font-bold">{index + 1}</span>
            {index !== dummyData.length - 1 && <div className="border-l border-black bg-black p-1"></div>}
          </div>
        ) : (
          <div>
            <span>{index + 1}</span>
          </div>
        ),
      )}
    </div>
  );
}

export default SliderIdx;
