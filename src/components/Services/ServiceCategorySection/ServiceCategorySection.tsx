import React from 'react';
import type { ServiceCategory } from '../../../types';
import ServiceCard from '../ServiceCard/ServiceCard';

interface Props {
  serviceCategory: ServiceCategory;
}

function ServiceCategorySection({ serviceCategory }: Props) {
  return (
    <section
      id={serviceCategory.categoryID}
      className={
        'md:w-full md:h-full md:p-[0rem] md:border-[2px] lg:border-transparent border-pallet-seconday overflow-hidden'
      }>
      <div className={'relative w-full h-full overflow-hidden'}>
        <h2
          className={
            'md:absolute z-[2] top-[1%] md:m-[0] w-full text-center whitespace-break-spaces border-y-[2px] md:border-transparent '
          }>
          {serviceCategory.categoryName}
        </h2>
        <img
          src={serviceCategory.categoryImage.imageLink}
          alt={serviceCategory.categoryImage.imageCaption}
          className={
            'md:absolute z-[1] top-[50%] md:left-[50%] left-[5%] md:translate-y-[-50%] md:translate-x-[-50%] aspect-[1/1] w-full md:max-w-[300px] lg:max-w-[500px] h-auto md:blur-[.5px]'
          }
        />
        <ul
          className={
            'md:absolute z-[3] bottom-[5%] left-[5%] lg:left-[25%] right-[5%] w-[100%] md:w-auto md:pb-[10px] h-fit md:p-[25px] mt-[50px] flex flex-col md:flex-row items-center justify-start gap-[10px] snap-both snap-mandatory overflow-auto'
          }>
          {serviceCategory.categoryServices.map((service, index) => {
            return (
              <li
                key={`service_${Math.random()}`}
                className={'shrink-0 w-full md:w-fit h-fit snap-center'}>
                <ServiceCard
                  service={service}
                  cardIndex={index}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default ServiceCategorySection;
