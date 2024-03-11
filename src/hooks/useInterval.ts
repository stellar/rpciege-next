import { useEffect, useRef } from 'react';

type UseIntervalOptions = {
  callback?: () => void;
  timeout?: number;
};

export const useInterval = (options?: UseIntervalOptions) => {
  const callbackRef = useRef<() => void>();
  const intervalRef = useRef<ReturnType<typeof accurateInterval>>();

  useEffect(() => {
    callbackRef.current = options?.callback;
  }, [options?.callback]);

  const start = () => {
    const interval = accurateInterval();

    interval.set(() => {
      callbackRef.current?.();
    }, options?.timeout || 1000);

    intervalRef.current = interval;
  };

  const stop = () => {
    intervalRef.current?.clear();
    intervalRef.current = undefined;
  };

  return {
    start,
    stop,
  };
};

const accurateInterval = () => {
  let timeout: any;
  let nextAt: number;
  let delay: number;
  let callback: () => void;

  const clear = () => {
    clearTimeout(timeout);
  };

  const tick = () => {
    nextAt += delay;
    timeout = setTimeout(tick, nextAt - Date.now());
    callback();
  };

  const set = (fn: () => void, ms: number) => {
    clear();
    nextAt = Date.now();
    delay = ms;
    callback = fn;
    timeout = setTimeout(tick, nextAt - Date.now());
  };

  return {
    clear,
    set,
  };
};
