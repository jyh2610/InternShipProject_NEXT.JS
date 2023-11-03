import React, { useCallback, useEffect, useMemo } from "react";

function Timer({ isActive, seconds, setSeconds, setIsActive }: { setSeconds: Function; setIsActive: Function; isActive: boolean; seconds: number }) {
  const decrementSeconds = useCallback(() => {
    setSeconds((prevSeconds: number) => prevSeconds - 1);
  }, [setSeconds]);

  useEffect(() => {
    if (isActive && seconds > 0) {
      const timer = setInterval(decrementSeconds, 1000);
      return () => clearInterval(timer);
    }
    if (seconds === 0) {
      setIsActive(false);
    }
  }, [isActive, seconds, setIsActive, decrementSeconds]);

  const formattedTime = useMemo(() => {
    return (
      <div>
        {Math.floor(seconds / 60)
          .toString()
          .padStart(2, "0")}
        :{(seconds % 60).toString().padStart(2, "0")}
      </div>
    );
  }, [seconds]);

  return formattedTime;
}

export default Timer;
