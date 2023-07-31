import React from 'react';
import type { Service } from '../../../types';

interface Props {
  sectionId: string;
  sectionHeading: string;
  services: Service[];
}

function ServiceCategorySection({
  sectionId,
  sectionHeading,
  services,
}: Props) {
  return (
    <section id={sectionId}>
      <div>
        <h2>{sectionHeading}</h2>
      </div>
    </section>
  );
}

export default ServiceCategorySection;
