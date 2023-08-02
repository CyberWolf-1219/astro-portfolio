import React from 'react';
import type { FeaturedProject } from '../../../types';

interface Props {
  project: FeaturedProject;
}

function FeaturedProjectCard({ project }: Props) {
  return (
    <div
      className={
        'relative z-[0] aspect-[4/5] w-full h-auto bg-pallet-primary border-[1px] border-pallet-accent shadow-[0px_0px_5px_-1px] shadow-pallet-accent'
      }>
      <img
        src={project.projectImage.imageLink}
        alt={project.projectImage.imageCaption}
        className={'absolute z-[1] w-full h-full object-cover'}
      />
      <h3 className={'!m-[0]'}>{project.projectTitle}</h3>
    </div>
  );
}

export default FeaturedProjectCard;
