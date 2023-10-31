"use client";

import React, { useCallback, useEffect, useMemo } from "react";

import Aos from "aos";

import "aos/dist/aos.css";

function FadeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const setScreenHeight = useCallback(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  useEffect(() => {
    function handleResize() {
      setScreenHeight(); // 이제 이 함수는 useCallback을 사용하므로 더 이상 의존성이 변경되지 않습니다.
    }
    // resize 이벤트가 발생하면 다시 계산하도록 아래 코드 추가
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setScreenHeight]);

  return useMemo(() => {
    return <>{children}</>;
  }, [children]);
}

export default FadeProvider;
