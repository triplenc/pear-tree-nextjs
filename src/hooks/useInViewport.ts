import { useEffect, useRef, useState } from "react";

export const useInViewport = <T extends Element>(
  callback: () => void,
  options: IntersectionObserverInit | undefined,
) => {
  const ref = useRef<T>(null);
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver((entries) => {
      setIsInViewport(entries[0].isIntersecting);
    }, options ?? { threshold: 0 });

    return () => {
      observer.disconnect();
    };
  }, [options]);

  useEffect(() => {
    if (isInViewport) {
      callback();
    }
  }, [callback, isInViewport]);

  return { observingTarget: ref };
};
