"use client";

import { useState } from "react";

import BotText from "./section-2/BotText";
import BothSliderBtn from "./section-3/BothSliderBtn";
import SliderIdx from "./section-3/SliderIdx";
import TextSlider from "./section-3/TextSlider";
import ThirdCarusel from "./section-3/ThirdCaruosel";

function SectionThree() {
  const [idx, setIdx] = useState(0);
  const [prevRef, setPrevRef] = useState(null);
  const [nextRef, setNextRef] = useState(null);

  return (
    <div className="pt-[10rem] pb-[4rem]">
      <div className="page-tit">
        <BotText />
      </div>
      <div className="w-full ">
        <section className="flex justify-between" style={{ width: "100%", maxWidth: "1600px", padding: "0 0 0 2rem" }}>
          <div className="flex flex-col">
            <TextSlider idx={idx} setIdx={setIdx} prevRef={prevRef} nextRef={nextRef} />
            <BothSliderBtn setPrevRef={setPrevRef} setNextRef={setNextRef} />
          </div>
          <SliderIdx idx={idx} />
          <ThirdCarusel idx={idx} prevRef={prevRef} nextRef={nextRef} />
        </section>
      </div>
    </div>
  );
}

export default SectionThree;
