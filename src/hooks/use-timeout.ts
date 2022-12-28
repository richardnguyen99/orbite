import { useCallback, useEffect, useRef } from "react";

export type UseTimeoutType = [() => boolean | null, () => void, () => void];

// eslint-disable-next-line @typescript-eslint/ban-types
const useTimeout = (fn: Function, duration = 0): UseTimeoutType => {
  const ready = useRef<boolean | null>(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const callback = useRef(fn);

  const isReady = useCallback(() => ready.current, []);
  const set = useCallback(() => {
    ready.current = false;
    timeout.current && clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      ready.current = true;
      callback.current();
    }, duration);
  }, [duration]);

  const clear = useCallback(() => {
    ready.current = null;
    timeout.current && clearTimeout(timeout.current);
  }, []);

  useEffect(() => {
    callback.current = fn;
  }, [fn]);

  useEffect(() => {
    set();

    return clear;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration]);

  return [isReady, clear, set];
};

export default useTimeout;
