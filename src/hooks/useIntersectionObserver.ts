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

  return observe;
}

export default useIntersectionObserver;
