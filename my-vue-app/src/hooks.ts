import { useEffect, useRef, useState } from "react";

export const useTimer = (second) => {
  const timerRef = useRef(0);
  const [seconds, setSeconds] = useState(second);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (start) {
      //   setInterval returns a timer ID.

      // If you don’t store that ID and clear it using clearInterval, each re-render that meets the condition will set a new interval.

      // These old intervals keep running in the background, all incrementing seconds, which results in duplicate state updates.

      timerRef.current = setInterval(
        () => setSeconds((prev) => prev + 1),
        1000
      );
    }

    return () => clearInterval(timerRef.current);
  }, [start]);

  const formatTimer = (seconds) => {
    let hh = `${Math.floor(seconds / (60 * 60))}`.padStart(2, "0");
    let mm = `${Math.floor((seconds % (60 * 60)) / 60)}`.padStart(2, "0"); // mm should show remaining minutes after hours, not total minutes. (making hours 0 after completing hour )
    let ss = `${Math.floor(seconds % 60)}`.padStart(2, "0");
    return `${hh}:${mm}:${ss}`.padStart(2, "0"); // seconds should show remaining seconds after minutes, not total. (making seconds 0 after completing minute )
  };
  const handlereset = () => {
    setStart(false);
    setSeconds(0);
  };

  return {
    formatTimer,
    seconds,
    setStart,
    handlereset,
  };
};
