import React from 'react';
import FeaturedProjectCard from '../FeaturedProjectCard/FeaturedProjectCard';

function RecentProjectsSection() {
  return (
    <section
      className={'shadow-md shadow-pallet-primary bg-pallet-primary-light'}>
      <div>
        <h2>@Recent Projects Section&gt;_</h2>
        <ul
          className={
            'w-full h-fit pb-[5px] flex flex-row items-center justify-start snap-x overflow-x-auto'
          }>
          <FeaturedProjectCard />
          <FeaturedProjectCard />
          <FeaturedProjectCard />
          <FeaturedProjectCard />
          <FeaturedProjectCard />
          <FeaturedProjectCard />
          <FeaturedProjectCard />
        </ul>
      </div>
    </section>
  );
}

export default RecentProjectsSection;
