import React from 'react';
import type { FeaturedProject } from '../../../types';

interface Props {
  project: FeaturedProject;
}

function FeaturedProjectCard({ project }: Props) {
  return (
    <article
      className={
        'relative z-[0] aspect-[5/2] w-full h-auto flex flex-row bg-pallet-primary text-pallet-accent '
      }>
      <header className={'flex-[2]'}>
        <img
          src={project.projectImage.imageLink}
          alt={project.projectImage.imageCaption}
          className={'w-full h-full object-cover'}
        />
      </header>
      <div className={'relative flex-[3] w-full h-full p-[1rem]'}>
        <h3
          className={
            '!mt-[0] border-b-[2px] border-dashed border-pallet-accent'
          }>
          {project.projectTitle}
        </h3>
        <p>{project.projectDesc}</p>
        <a
          href={project.projectLink}
          target='popup'
          className={
            'absolute bottom-[1rem] right-[1rem] hover:text-pallet-accent'
          }>
          Visit Project &gt;&gt;
        </a>
      </div>
    </article>
  );
}

export default FeaturedProjectCard;
