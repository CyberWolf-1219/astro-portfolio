import React from 'react';
import type { ServiceCategory } from '../../../types';
import ServiceCard from '../ServiceCard/ServiceCard';

interface Props {
  serviceCategory: ServiceCategory;
}

function ServiceCategorySection({ serviceCategory }: Props) {
  return (
    <section id={serviceCategory.categoryID}>
      <div>
        <h2 className={'text-center whitespace-break-spaces border-y-[2px]'}>
          {serviceCategory.categoryName}
        </h2>
        <img
          src={serviceCategory.categoryImage.imageLink}
          alt={serviceCategory.categoryImage.imageCaption}
          className={'aspect-[1/1] w-full h-auto'}
        />
        <ul
          className={
            'w-[100%] h-fit mt-[20px] flex flex-col items-center justify-start gap-[20px] snap-y snap-mandatory'
          }>
          {serviceCategory.categoryServices.map((service) => {
            return (
              <li
                key={`service_${Math.random()}`}
                className={'shrink-0 w-full h-fit snap-center'}>
                <ServiceCard service={service} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default ServiceCategorySection;
