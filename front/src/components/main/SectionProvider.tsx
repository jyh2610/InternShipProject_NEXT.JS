"use client";
import { useRef } from "react";

function SectionProvider({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  return (
    <section data-aos="fade-up">
      <div ref={ref}>{children}</div>
    </section>
  );
}

export default SectionProvider;
