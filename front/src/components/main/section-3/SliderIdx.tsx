import { dummyData } from "@/constants/constants";

function SliderIdx({ idx }: { idx: number }) {
  return <div>{dummyData.map((item, index) => (idx === index ? <span className="font-bold">{index + 1}</span> : <span>{index + 1}</span>))}</div>;
}

export default SliderIdx;
