import { useState, useEffect, RefObject } from 'react';

export function useVisibility(
  ref: RefObject<HTMLElement | null>,
  options: IntersectionObserverInit = { root: null, rootMargin: '0px', threshold: 0 }
) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      options
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isVisible;
}