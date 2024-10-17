import { isEqual } from 'lodash-es';
import { useMemo, useRef } from 'react';

/**
 * Hook that memoizes the arguments passed to it. It will return the same arguments if they haven't changed.
 * This will internally perform a deep equality check to determine if the arguments have changed.
 *
 * @param args
 * @returns
 */
export function useMemoizedArgs<Extra = void>(args: Extra) {
  const prevArgs = useRef<Extra | null>(null);

  // Check if the current arguments are the same as the previous ones
  const memoizedArgs = useMemo(() => {
    // If the previous args are null (first call), or if the args have changed, return the new args
    if (prevArgs.current === null || !isEqual(prevArgs.current, args)) {
      prevArgs.current = args; // Update the previous args
      return args;
    }
    // If the args haven't changed, return the previous args
    return prevArgs.current;
  }, [args]);

  return memoizedArgs;
}
