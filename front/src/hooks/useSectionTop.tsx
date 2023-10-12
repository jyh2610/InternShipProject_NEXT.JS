import { useRef, useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { sectionContact } from "@/redux/slicer/scrollStopper";

function useSectionTop() {
  const sectionOneRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const sectionOneTop = sectionOneRef.current?.getBoundingClientRect().top;
    dispatch(sectionContact({ section: sectionOneTop }));
    const handleScroll = () => {
      const sectionOneTop = sectionOneRef.current?.getBoundingClientRect().top;
      dispatch(sectionContact({ section: sectionOneTop }));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch, sectionOneRef]);

  return sectionOneRef;
}

export default useSectionTop;
