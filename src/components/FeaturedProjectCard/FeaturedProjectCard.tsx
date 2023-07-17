import React from 'react';

function FeaturedProjectCard() {
  return (
    <li
      className={'shrink-0 w-full max-w-full h-fit snap-start snap-mandatory'}>
      <div
        className={
          'relative z-[0] aspect-[4/5] w-full h-auto bg-pallet-accent border-[2px] border-pallet-secondary'
        }>
        <img
          src=''
          alt=''
          className={'absolute z-[1] w-full h-full object-cover'}
        />
        <h3 className={'!m-[0]'}>PROJECT</h3>
      </div>
    </li>
  );
}

export default FeaturedProjectCard;
