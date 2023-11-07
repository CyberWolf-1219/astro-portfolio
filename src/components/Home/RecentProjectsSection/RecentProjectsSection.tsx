import React from 'react';
import FeaturedProjectCard from '../FeaturedProjectCard/FeaturedProjectCard';
import { FEATURED_PROJECTS } from '../../../data/featured_projects';
import Error from '../../Common/Error/Error';

function RecentProjectsSection() {
  return (
    <section
      className={'shadow-md shadow-pallet-primary bg-pallet-primary-light'}>
      <div>
        <h2>@Recent Projects&gt;_</h2>
        {FEATURED_PROJECTS.length > 0 ? (
          <ul
            className={
              'w-full h-fit pb-[5px] flex flex-col items-center justify-start  gap-[10px] snap-x snap-mandatory overflow-x-auto'
            }>
            {FEATURED_PROJECTS.map((project) => {
              return (
                <li
                  key={`featured_project_${Math.random()}`}
                  className={'shrink-0 w-full max-w-full h-fit snap-center'}>
                  <FeaturedProjectCard project={project} />
                </li>
              );
            })}
          </ul>
        ) : (
          <Error error={'NO PROJECTS HAS BEEN UPLOADED YET'} />
        )}
      </div>
    </section>
  );
}

export default RecentProjectsSection;
