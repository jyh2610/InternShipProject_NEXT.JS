import Text from "./section-2/Text";
import TwoCaruosel from "./section-2/TwoCaruosel";

function Sectiontwo() {
  return (
    <section className="pt-[10rem] pb-[4rem]">
      <Text />
      <div className=" flex justify-start	">
        <TwoCaruosel />
      </div>
    </section>
  );
}

export default Sectiontwo;
