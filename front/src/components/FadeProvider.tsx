"use client";

import React, { useEffect } from "react";

import Aos from "aos";

import "aos/dist/aos.css";

function FadeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  useEffect(() => {
    function setScreenHeight() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
    // resize 이벤트가 발생하면 다시 계산하도록 아래 코드 추가
    window.addEventListener("resize", setScreenHeight);
    return () => window.removeEventListener("resize", setScreenHeight);
  }, []);

  return <>{children}</>;
}

export default FadeProvider;
