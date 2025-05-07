// 1 вариант дебаунса (Главная перспектива)

import { useCallback, useRef } from "react";

export const useDebounce = (
  callback: (value: string) => void,
  delay: number
) => {
  const debounceTimeout = useRef<number | null>(null);

  const debouncedCallback = useCallback(
    (value: string) => {
      if (debounceTimeout.current !== null) {
        clearTimeout(debounceTimeout.current);
      }
      debounceTimeout.current = setTimeout(() => {
        callback(value);
      }, delay) as unknown as number;
    },
    [callback, delay]
  );

  return debouncedCallback;
};

// 2 вариант дебаунса

export const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};
