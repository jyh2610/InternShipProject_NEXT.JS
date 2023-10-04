import { useRef, useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { sectionContact } from "@/redux/slicer/scrollStopper";

function useContact() {
  const componentRef = useRef<HTMLDivElement | null>(null) || useRef<HTMLImageElement | null>(null);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const componentRect = componentRef.current?.getBoundingClientRect().bottom;
    dispatch(sectionContact({ nav: componentRect }));
  }, [dispatch]);
  return componentRef;
}

export default useContact;
