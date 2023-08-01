import React, {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { SERVICES } from '../../../data/service';
import ServiceCategorySection from '../ServiceCategorySection/ServiceCategorySection';

interface Props {
  selectedCategoryID: string;
}

function ServiceCategoryViewer({ selectedCategoryID }: Props) {
  return (
    <main className='w-full h-fit overflow-hidden'>
      {SERVICES.map((serviceCategory, index) => {
        if (serviceCategory.categoryID == selectedCategoryID) {
          return (
            <ServiceCategorySection
              key={`category_${Math.random()}`}
              sectionId={serviceCategory.categoryID}
              sectionHeading={serviceCategory.categoryName}
              services={serviceCategory.categoryServices}
            />
          );
        }
      })}
    </main>
  );
}

export default ServiceCategoryViewer;
