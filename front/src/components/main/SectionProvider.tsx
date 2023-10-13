import React from "react";

function SectionProvider({ children }: { children: React.ReactNode }) {
  return (
    <section data-aos="fade-up" className="h-screen">
      {children}
    </section>
  );
}

export default SectionProvider;
