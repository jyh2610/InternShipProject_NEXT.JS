import { useEffect, useState } from "react";

import { useMediaQuery } from "react-responsive";
export const Mobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  const mobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    const checkResize = () => {
      if (mobile) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    checkResize();
  }, [mobile]);

  return isMobile;
};
