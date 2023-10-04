import { useRef, useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { sectionContact } from "@/redux/slicer/scrollStopper";

function useContact(type: string, component: string) {
  const componentRef = useRef<HTMLDivElement | null>(null) || useRef<HTMLImageElement | null>(null);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const componentRect = type === "bottom" ? componentRef.current?.getBoundingClientRect().bottom : componentRef.current?.getBoundingClientRect().top;
    component === "nav" ? dispatch(sectionContact({ nav: componentRect })) : dispatch(sectionContact({ section: componentRect }));
  }, [dispatch]);
  return componentRef;
}

export default useContact;
