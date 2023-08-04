import React from 'react';
import HeroMainElement from '../HeroMainElement/HeroMainElement';

function HeroSection() {
  return (
    <section
      id={'about'}
      className={'w-full h-screen md:h-fit'}>
      <div
        className={
          'relative z-[0] md:aspect-[16/9] w-full h-auto flex flex-col items-center justify-center overflow-hidden'
        }>
        <div
          className={
            'md:absolute md:bottom-[0%] right-[-35%] lg:bottom-[0%] lg:right-[0%] aspect-[1/1] w-[80%] max-w-[500px] h-auto md:blur-[3px] md:saturate-[1.5] md:brightness-[1.2]'
          }>
          <HeroMainElement />
        </div>
        <div className={'md:absolute z-[2] top-[5%] left-[0%] w-fit h-fit'}>
          <h1
            className={
              'text-center md:text-left lg:!text-8xl text-pallet-light '
            }>
            FULL-STACK DEVELOPER
          </h1>
          <h2 className={'text-center md:text-left !text-xl md:!text-5xl'}>
            SELF-TAUGHT FROM SCRATCH
          </h2>
          <p className={'text-center md:text-left md:text-2xl'}>
            Tried Once & Got Addicted
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
