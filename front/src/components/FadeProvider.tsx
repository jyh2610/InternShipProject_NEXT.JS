"use client";

import React, { useEffect } from "react";

import Aos from "aos";

import "aos/dist/aos.css";

function FadeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return <>{children}</>;
}

export default FadeProvider;
