import Text from "./section-2/Text";
import TwoCaruosel from "./section-2/TwoCaruosel";

import "./section-2/layout.css";

function Sectiontwo() {
  return (
    <section className="pt-[5rem] md:pt-[10rem] pb-[4rem]">
      <Text />
      <div className=" flex justify-start re_after" data-aos="fade-up" data-aos-offset="300" data-aos-delay="50">
        <TwoCaruosel />
      </div>
    </section>
  );
}

export default Sectiontwo;
