import React from 'react';
import ServiceCategorySelector from '../ServiceCategorySelector/ServiceCategorySelector';
import ServiceCategoryViewer from '../ServiceCategoryViewer/ServiceCategoryViewer';
import { SERVICES } from '../../../data/service';

function ServicesComponent() {
  return (
    <div className='w-full h-fit flex flex-row items-start justify-start'>
      <ServiceCategorySelector serviceCategories={SERVICES} />
      <main className='w-full h-fit overflow-hidden'>
        <ServiceCategoryViewer categoryIDToRender={undefined} />
      </main>
    </div>
  );
}

export default ServicesComponent;
