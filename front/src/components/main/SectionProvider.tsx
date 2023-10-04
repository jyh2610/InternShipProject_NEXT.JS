function SectionProvider({ children }: { children: React.ReactNode }) {
  return (
    <section data-aos="fade-up" className="h-full">
      {children}
    </section>
  );
}

export default SectionProvider;
