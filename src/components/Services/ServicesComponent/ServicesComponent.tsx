import React, { useState } from 'react';
import ServiceCategorySelector from '../ServiceCategorySelector/ServiceCategorySelector';
import ServiceCategoryViewer from '../ServiceCategoryViewer/ServiceCategoryViewer';
import { SERVICES } from '../../../data/service';

function ServicesComponent() {
  const [selectedCategoryID, setSelectedCategoryID] = useState('overview');

  return (
    <div className='md:relative md:aspect-[16/9] w-full max-w-[1280px] h-fit md:h-auto lg:my-[10%] mx-auto md:flex flex-row items-start justify-start md:overflow-hidden lg:shadow-[0px_0px_8px_-2px] lg:shadow-pallet-accent '>
      <ServiceCategorySelector
        serviceCategories={SERVICES}
        setSelectedCategoryID={setSelectedCategoryID}
      />
      <ServiceCategoryViewer selectedCategoryID={selectedCategoryID} />
    </div>
  );
}

export default ServicesComponent;
