import { mainImg } from "@/constants/constants";
import ScrollDown from "../icons/ScrollDown";
import MainText from "./section-1/MainText";
import { useEffect, useState } from "react";
import AfterScroll from "./section-1/AfterScroll";
import BeforeScroll from "./section-1/BeforeScroll";

const SectionOne = () => {
  const [isScrollDown, setIsScrollDown] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  return <BeforeScroll />;
};

export default SectionOne;
