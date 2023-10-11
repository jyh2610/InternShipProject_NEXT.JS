"use client";

import { useRef, useState } from "react";
import ThirdCarusel from "./section-3/ThirdCaruosel";
import TextSlider from "./section-3/TextSlider";
import BothSliderBtn from "./section-3/BothSliderBtn";
import SliderIdx from "./section-3/SliderIdx";

function SectionThree() {
  const [idx, setIdx] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section className="flex">
      <TextSlider idx={idx} prevRef={prevRef} nextRef={nextRef} />
      <BothSliderBtn prevRef={prevRef} nextRef={nextRef} />
      <SliderIdx idx={idx} />
      <ThirdCarusel idx={idx} setIdx={setIdx} prevRef={prevRef} nextRef={nextRef} />
    </section>
  );
}

export default SectionThree;
