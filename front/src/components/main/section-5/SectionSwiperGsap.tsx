import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { data } from "./SwiperData";
import { kill } from "process";
import "../section-5/style.css";
import { useAppSelector } from "@/redux/hooks";

gsap.registerPlugin(ScrollTrigger);
interface SectionSwiperGsapProps {
  id: string;
  imageSrc: string;
  title: string;
}
const SectionSwiperGsap = ({ id, imageSrc, title }) => {
  const sectionRef = useRef<SectionSwiperGsapProps>(null);
  const scrollHeight = useAppSelector((state) => state.scrollStopper.navBottom);
  const scrollTopHeight = useAppSelector((state) => state.scrollStopper.sectionTop);

  useEffect(() => {
    const section = sectionRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: () => (scrollHeight < scrollTopHeight ? "top top" : "bottom bottom"),
        pin: true,
        pinSpacing: false,
      },
    });

    tl.fromTo(section.querySelector(".parallax__item__img"), { scale: 1.2 }, { scale: 1, duration: 1 });
  }, []);

  return (
    <section id={id} className="parallax__item" ref={sectionRef}>
      <span className="parallax__item__num">{id}</span>
      <div className="parallax__item__img" style={{ backgroundImage: `url(${imageSrc})` }} />
      <h2 className="parallax__item__title">{title}</h2>
    </section>
  );
};

export default SectionSwiperGsap;
