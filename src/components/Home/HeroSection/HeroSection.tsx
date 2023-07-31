import React from 'react';

function HeroSection() {
  return (
    <section id={'about'}>
      <div
        className={
          'md:aspect-[16/9] flex flex-col items-center justify-center'
        }>
        <h1
          className={
            'text-center text-pallet-light border-y-[2px] border-pallet-light '
          }>
          FULL-STACK DEVELOPER
        </h1>
        <h2 className={'text-center !text-xl'}>SELF-TAUGHT FROM SCRATCH</h2>
      </div>
    </section>
  );
}

export default HeroSection;
