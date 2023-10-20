"use client";
import { useMediaQuery } from "react-responsive";

import "../../components/main/section-5/style.css";
import HoverImage from "./section-5/HoverImage";
import MobileSlice from "./section-5/MobileSlice";
import { Mobile } from "./section-5/Mobile";

function SectionFive() {
  return <>{Mobile ? <MobileSlice /> : <HoverImage />}</>;
}

export default SectionFive;
