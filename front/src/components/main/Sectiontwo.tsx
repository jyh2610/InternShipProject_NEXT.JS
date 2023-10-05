import React from "react";

import SectionProvider from "./SectionProvider";
import BotText from "./section-2/BotText";
import Text from "./section-2/Text";
import TwoCaruosel from "./section-2/TwoCaruosel";

function Sectiontwo() {
  const sliderHander = () => {};
  return (
    <section className="flex flex-col">
      <Text />
      <TwoCaruosel />
      <BotText />
    </section>
  );
}

export default Sectiontwo;
