import { useEffect, useRef, useState } from "react";

const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const interValRef = useRef<number | null>(null);

  const stopTimer = () => {
    if (interValRef.current) window.clearInterval(interValRef.current);
  };

  useEffect(() => {
    if (timer < 10) {
      interValRef.current = window.setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    } else {
      stopTimer();
    }

    return () => {
      stopTimer();
    };
  }, [timer]);

  if (timer <= 10) {
    return (
      <div>
        HookTimer - {timer} -
        <button onClick={() => stopTimer()}>stopTimer</button>
      </div>
    );
  } else {
    stopTimer();

    return (
      <div>
        HookTimer - {timer} -
        <button onClick={() => stopTimer()}>stopTimer</button>
      </div>
    );
  }
};

export default MutableRef;
