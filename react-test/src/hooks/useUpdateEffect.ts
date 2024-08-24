import { EffectCallback, DependencyList, useRef, useEffect } from 'react';

export const useUpdateEffect = (
  effect: EffectCallback,
  deps?: DependencyList
) => {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    return effect();
  }, deps);
};
