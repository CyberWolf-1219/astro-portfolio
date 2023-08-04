import React, {
  Dispatch,
  MouseEvent,
  SetStateAction,
  memo,
  useEffect,
  useRef,
} from 'react';

import type { ServiceCategory } from '../../../types';
import SelectorButton from '../SelectorButton/SelectorButton';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

interface Props {
  serviceCategories: ServiceCategory[];
  setSelectedCategoryID: Dispatch<SetStateAction<string>>;
}

function ServiceCategorySelector({
  serviceCategories,
  setSelectedCategoryID,
}: Props) {
  const rootElement = useRef(null);
  const categorySelectorButtons = useRef<HTMLButtonElement[]>([]);

  // * INTERSECTION OBSERVER SETUP =============================================
  const [observe, unobserve] = useIntersectionObserver(
    intersectionObserverCallback,
    {
      root: rootElement.current,
      threshold: [0.75],
    }
  );

  useEffect(() => {
    categorySelectorButtons.current!.forEach((button) => {
      observe(button);
    });

    return () => {
      categorySelectorButtons.current!.forEach((button) => {
        unobserve(button);
      });
    };
  }, []);

  function intersectionObserverCallback(
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio >= 0.75) {
        (entry.target as HTMLButtonElement).click();
      }
    });
  }
  // * =========================================================================

  function buttonClick(e: MouseEvent<HTMLButtonElement>) {
    if (setSelectedCategoryID) {
      setSelectedCategoryID(e.currentTarget.value);
    } else {
      console.error('NO REACT DISPATCHER FOUND...');
    }
  }

  return (
    <aside
      ref={rootElement}
      className='fixed lg:absolute z-[30] bottom-[0] right-[0] w-full h-[8vh] md:h-fit py-[5px] flex flex-row items-center justify-start font-bold text-lg md:!text-md overflow-x-auto snap-x snap-mandatory bg-pallet-primary-light'>
      {serviceCategories.map((serviceCategory) => {
        return (
          <SelectorButton
            key={`category_selector_${Math.random()}`}
            buttonText={serviceCategory.categoryName}
            clickHandler={buttonClick}
            buttonRefHolder={categorySelectorButtons.current}
            value={serviceCategory.categoryID}
          />
        );
      })}
    </aside>
  );
}
export default memo(ServiceCategorySelector);
