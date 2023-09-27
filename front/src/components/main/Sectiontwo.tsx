import React from "react";

import SectionProvider from "./SectionProvider";
import BotText from "./section-2/BotText";
import Text from "./section-2/Text";
import TwoCaruosel from "./section-2/TwoCaruosel";

function Sectiontwo() {
  const sliderHander = () => {};
  return (
    <SectionProvider>
      <div className="flex flex-col h-screen">
        <Text />
        <TwoCaruosel />
        {/* <BotText /> */}
      </div>
    </SectionProvider>
  );
}

export default Sectiontwo;
