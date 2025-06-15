
import { useState, useEffect, useRef } from "react";

export function useInView<T extends HTMLElement = HTMLElement>(options?: IntersectionObserverInit): [React.RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(node); // Only animate once
        }
      },
      { threshold: 0.2, ...options }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return [ref, inView];
}
