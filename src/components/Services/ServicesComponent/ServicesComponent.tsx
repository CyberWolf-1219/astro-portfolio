import React, { useState } from 'react';
import ServiceCategorySelector from '../ServiceCategorySelector/ServiceCategorySelector';
import ServiceCategoryViewer from '../ServiceCategoryViewer/ServiceCategoryViewer';
import { SERVICES } from '../../../data/service';

function ServicesComponent() {
  const [selectedCategoryID, setSelectedCategoryID] = useState('overview');

  return (
    <div className='w-full h-fit flex flex-row items-start justify-start'>
      <ServiceCategorySelector
        serviceCategories={SERVICES}
        setSelectedCategoryID={setSelectedCategoryID}
      />
      <ServiceCategoryViewer selectedCategoryID={selectedCategoryID} />
    </div>
  );
}

export default ServicesComponent;
