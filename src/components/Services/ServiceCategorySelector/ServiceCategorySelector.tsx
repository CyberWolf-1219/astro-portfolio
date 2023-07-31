import React, { MouseEvent, useEffect, useRef } from 'react';
import type { ServiceCategory } from '../../../types';
import SelectorButton from '../SelectorButton/SelectorButton';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

interface Props {
  serviceCategories: ServiceCategory[];
}

function ServiceCategorySelector({ serviceCategories }: Props) {
  const rootElement = useRef(null);
  const categorySelectorButtons = useRef<HTMLButtonElement[]>([]);

  const observe = useIntersectionObserver(intersectionObserverCallback, {
    root: rootElement.current,
    threshold: [0.25, 0.5, 0.75, 1.0],
  });

  useEffect(() => {
    categorySelectorButtons.current!.forEach((button) => {
      observe(button);
    });
  }, []);

  function buttonClick(e: MouseEvent) {
    console.log(e);
  }

  function intersectionObserverCallback(
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) {}

  return (
    <aside
      ref={rootElement}
      className='fixed z-[30] bottom-[0] right-[0] w-full h-fit py-[10px] flex flex-row items-center justify-start font-bold text-lg overflow-x-auto snap-x snap-mandatory bg-pallet-primary-light'>
      {serviceCategories.map((serviceCategory) => {
        return (
          <SelectorButton
            buttonText={serviceCategory.categoryName}
            clickHandler={buttonClick}
            buttonRefHolder={categorySelectorButtons.current}
          />
        );
      })}
    </aside>
  );
}

export default ServiceCategorySelector;
