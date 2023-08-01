import React, { useState } from 'react';

function useIntersectionObserver(
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
) {
  const [INTERSECTION_OBSERVER, setINTERSECTION_OBSERVER] = useState(
    new IntersectionObserver(callback, options)
  );

  function observe(element: HTMLElement) {
    INTERSECTION_OBSERVER.observe(element);
  }

  function unobserve(element: HTMLElement) {
    INTERSECTION_OBSERVER.unobserve(element);
  }

  return [observe, unobserve] as const;
}

export default useIntersectionObserver;
