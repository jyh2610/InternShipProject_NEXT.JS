import { Divider } from "antd";

function TextDivider({ data }: { data: string }) {
  return (
    <div className="w-[40%] mx-auto">
      <div className="cursor-pointer">{data}</div>
      <Divider />
    </div>
  );
}

export default TextDivider;
