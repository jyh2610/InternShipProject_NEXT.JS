import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { img } from "@/constants/constants";
import ScrollSpin from "./ScrollSpin";

gsap.registerPlugin(ScrollTrigger);

function UpAnimation() {
  const sectionOneRef = useRef(null);
  const scrollSpinRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sectionOneElement = sectionOneRef.current;
    const scrollSpinElement = scrollSpinRef.current;

    if (sectionOneElement && scrollSpinElement) {
      gsap.to(sectionOneElement, {
        scale: 2,
        duration: 0.2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: sectionOneElement,
          start: "bottom bottom",
          end: "bottom 80%",
          scrub: true,
          anticipatePin: 1,
        },
      });

      gsap.from(scrollSpinElement, {
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: sectionOneElement,
          start: "top 80%",
          end: "bottom 80%",
          scrub: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (self.progress === 1) {
              setVisible(true);
            }
          },
        },
      });
    }
  }, []);

  return (
    <div className="w-1/2 h-1/2 relative flex flex-col justify-center items-center">
      <div ref={sectionOneRef} className="bg-cover bg-center w-full h-full" style={{ backgroundImage: `url(${img})` }}>
        <div className="absolute top-10 p-10 flex flex-col items-center">
          <p className="text-white text-2xl">공간은 이야기를 품고 있습니다.</p>
          <p className="text-white text-2xl">우리는 그 이야기를 아름답게 만듭니다.</p>
        </div>
        <div className="w-full h-full flex items-end justify-center">
          <div ref={scrollSpinRef}>{visible === true && <ScrollSpin />}</div>
        </div>
      </div>
    </div>
  );
}

export default UpAnimation;
