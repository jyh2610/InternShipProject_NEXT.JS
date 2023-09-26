import { useRef } from "react";

function SectionProvider({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  return (
    <section className="h-screen ">
      <div ref={ref}>{children}</div>
    </section>
  );
}

export default SectionProvider;
