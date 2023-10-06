import BotText from "./section-2/BotText";
import Text from "./section-2/Text";
import TwoCaruosel from "./section-2/TwoCaruosel";

function Sectiontwo() {
  return (
    <section className="flex flex-col  h-screen">
      <Text />
      <TwoCaruosel />
      <BotText />
    </section>
  );
}

export default Sectiontwo;
