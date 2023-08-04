import React, { useState } from 'react';
import ServiceCategorySelector from '../ServiceCategorySelector/ServiceCategorySelector';
import ServiceCategoryViewer from '../ServiceCategoryViewer/ServiceCategoryViewer';
import { SERVICES } from '../../../data/service';

function ServicesComponent() {
  const [selectedCategoryID, setSelectedCategoryID] = useState('overview');

  return (
    <div className='md:relative md:aspect-[16/9] w-full max-w-[1440px] h-fit md:h-auto mx-auto flex flex-row items-start justify-start overflow-hidden'>
      <ServiceCategorySelector
        serviceCategories={SERVICES}
        setSelectedCategoryID={setSelectedCategoryID}
      />
      <ServiceCategoryViewer selectedCategoryID={selectedCategoryID} />
    </div>
  );
}

export default ServicesComponent;
