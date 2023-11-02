"use client";

import BotText from "./section-3/BotText";

import Slider from "./section-3/Slider";

function SectionThree() {
  return (
    <div style={{ background: "#f8f8f8" }} className="pt-[8rem] pb-[4rem] three-wrap" data-aos="fade-up" data-aos-offset="300" data-aos-delay="100">
      <BotText />
      <Slider />
    </div>
  );
}

export default SectionThree;
