import React from 'react';
import HeroMainElement from '../HeroMainElement/HeroMainElement';

function HeroSection() {
  return (
    <section
      id={'about'}
      className={'w-full h-screen'}>
      <div
        className={
          'relative z-[0] md:aspect-[16/9] w-full h-full flex flex-col items-center justify-center'
        }>
        <div className={'aspect-[1/1] w-[80%] h-auto'}>
          <HeroMainElement />
        </div>
        <div className={'relative z-[2]'}>
          <h1 className={'text-center text-pallet-light '}>
            FULL-STACK DEVELOPER
          </h1>
          <h2 className={'text-center !text-xl'}>SELF-TAUGHT FROM SCRATCH</h2>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
