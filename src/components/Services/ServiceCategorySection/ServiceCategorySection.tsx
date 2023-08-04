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
        'md:w-full md:h-full md:p-[0rem] lg:pb-[20px] md:border-[2px] border-pallet-accent overflow-hidden'
      }>
      <div className={'relative w-full h-full overflow-hidden'}>
        <h2
          className={
            'md:absolute top-[1%] md:m-[0] w-full text-center whitespace-break-spaces border-y-[2px] md:border-transparent '
          }>
          {serviceCategory.categoryName}
        </h2>
        <img
          src={serviceCategory.categoryImage.imageLink}
          alt={serviceCategory.categoryImage.imageCaption}
          className={
            'md:absolute bottom-[0%] xl:bottom-[0%] left-[0%] xl:left-[-10%] aspect-[1/1] w-full h-auto md:w-[500px] xl:w-[800px] md:blur-[1.5px] md:object-bottom'
          }
        />
        <ul
          className={
            'md:absolute bottom-[5%] right-[10%] w-[100%] md:w-[45%] md:pb-[10px] h-fit md:p-[25px] mt-[20px] flex flex-col md:flex-row items-center justify-start gap-[20px] snap-both snap-mandatory overflow-auto'
          }>
          {serviceCategory.categoryServices.map((service) => {
            return (
              <li
                key={`service_${Math.random()}`}
                className={'shrink-0 w-full md:w-fit h-fit snap-center'}>
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
