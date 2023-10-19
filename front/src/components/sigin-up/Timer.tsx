import React, { useEffect } from "react";

function Timer({ isActive, seconds, setSeconds, setIsActive }: { setSeconds: Function; setIsActive: Function; isActive: boolean; seconds: number }) {
  useEffect(() => {
    if (isActive && seconds > 0) {
      const timer = setTimeout(() => {
        setSeconds((prevSeconds: number) => prevSeconds - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
    if (seconds === 0) {
      setIsActive(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, seconds]);

  return (
    <div>
      {Math.floor(seconds / 60)
        .toString()
        .padStart(2, "0")}
      :{(seconds % 60).toString().padStart(2, "0")}
    </div>
  );
}

export default Timer;
