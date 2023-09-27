import React from "react";

import SectionProvider from "./SectionProvider";
import BotText from "./section-2/BotText";
import Text from "./section-2/Text";
import TwoCaruosel from "./section-2/TwoCaruosel";

function Sectiontwo() {
  const sliderHander = () => {};
  return (
    <SectionProvider>
      <React.Fragment>
        <Text />
        <TwoCaruosel />
        <BotText />
      </React.Fragment>
    </SectionProvider>
  );
}

export default Sectiontwo;
