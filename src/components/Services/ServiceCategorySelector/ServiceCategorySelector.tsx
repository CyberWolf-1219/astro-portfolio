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
      className='flex-[1] sticky md:static z-[30] top-[0] bottom-[0] right-[0] w-full h-[8vh] md:h-full flex md:flex-col items-center justify-start md:justify-stretch md:border-l-[2px] md:border-t-[2px] border-pallet-secondary overflow-x-auto snap-x snap-mandatory bg-pallet-primary-light'>
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
