import React from 'react';
import FeaturedProjectCard from '../FeaturedProjectCard/FeaturedProjectCard';
import { FEATURED_PROJECTS } from '../../../data/featured_projects';

function RecentProjectsSection() {
  return (
    <section
      className={'shadow-md shadow-pallet-primary bg-pallet-primary-light'}>
      <div>
        <h2>@Recent Projects Section&gt;_</h2>
        <ul
          className={
            'w-full h-fit pb-[5px] flex flex-row items-center justify-start  md:grid grid-cols-3 gap-[10px] snap-x snap-mandatory overflow-x-auto'
          }>
          {FEATURED_PROJECTS.length > 0 ? (
            FEATURED_PROJECTS.map((project) => {
              return (
                <li
                  key={`featured_project_${Math.random()}`}
                  className={'shrink-0 w-full max-w-full h-fit snap-center'}>
                  <FeaturedProjectCard project={project} />
                </li>
              );
            })
          ) : (
            <code
              className={
                'w-full h-fit p-[2rem] text-xl text-pallet-accent border-[5px] border-pallet-accent'
              }>
              <span>&#58;&#40;&nbsp;ERROR</span>
              <br />
              <span>&lt;NO PROJECTS HAS BEEN UPLOADED YET/&gt;</span>
            </code>
          )}
        </ul>
      </div>
    </section>
  );
}

export default RecentProjectsSection;
