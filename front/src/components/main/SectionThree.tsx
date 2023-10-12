"use client";

import { MutableRefObject, useRef, useState } from "react";
import ThirdCarusel from "./section-3/ThirdCaruosel";
import TextSlider from "./section-3/TextSlider";
import BothSliderBtn from "./section-3/BothSliderBtn";
import SliderIdx from "./section-3/SliderIdx";

function SectionThree() {
  const [idx, setIdx] = useState(0);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  return (
    <section className="flex justify-between">
      <div className="flex flex-col">
        <TextSlider idx={idx} setIdx={setIdx} prevRef={prevRef} nextRef={nextRef} />
        <BothSliderBtn prevRef={prevRef} nextRef={nextRef} />
      </div>
      <SliderIdx idx={idx} />
      <ThirdCarusel idx={idx} prevRef={prevRef} nextRef={nextRef} />
    </section>
  );
}

export default SectionThree;
