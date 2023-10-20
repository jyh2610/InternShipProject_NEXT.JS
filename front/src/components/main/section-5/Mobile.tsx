import { useEffect, useState } from "react";

import { useMediaQuery } from "react-responsive";
export const Mobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  const mobile = useMediaQuery({ maxWidth: 768 });

  const checkResize = () => {
    if (mobile) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    checkResize();
  }, [mobile]);

  return isMobile;
};
