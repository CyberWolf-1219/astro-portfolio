import React from 'react';
import { SERVICES } from '../../../data/service';
import ServiceCategorySection from '../ServiceCategorySection/ServiceCategorySection';
import HeroSection from '../HeroSection/HeroSection';

interface Props {
  categoryIDToRender: string | undefined;
}

function ServiceCategoryViewer({ categoryIDToRender }: Props) {
  return (
    <>
      {SERVICES.map((serviceCategory, index) => {
        if (serviceCategory.categoryID == categoryIDToRender) {
          return (
            <ServiceCategorySection
              sectionId={serviceCategory.categoryID}
              sectionHeading={serviceCategory.categoryName}
              services={serviceCategory.categoryServices}
            />
          );
        }
      })}
    </>
  );
}

export default ServiceCategoryViewer;
