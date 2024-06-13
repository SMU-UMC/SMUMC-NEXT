import { Dispatch, SetStateAction } from "react";

interface CounterProps {
  setCount: Dispatch<SetStateAction<number>>;
  start: number;
  end: number;
}

function counter({ setCount, start, end }: CounterProps) {
  let now = start;
  const handle = setInterval(() => {
    setCount(Math.ceil(now));
    if (now >= end) {
      clearInterval(handle);
    }
    const step = (end - start) / 20;
    now += step;
  }, 300);
}

export { counter };
