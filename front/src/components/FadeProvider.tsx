"use client";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function FadeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return <>{children}</>;
}

export default FadeProvider;
