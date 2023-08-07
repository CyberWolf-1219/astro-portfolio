import React from 'react';
import { ABOUT_ME } from '../../../data/about_me';

function AboutSection() {
  return (
    <section className={'bg-pallet-primary-light'}>
      <div className={'w-full h-fit '}>
        <h2>{ABOUT_ME.heading}</h2>
        <div
          className={
            'w-full h-fit flex flex-col md:block items-start justify-start'
          }>
          <img
            src='/profile_image.svg'
            alt=''
            className={
              'shrink-0 aspect-[4/5] md:aspect-[1/1] xl:aspect-[4/3] w-full max-w-[400px] h-auto md:mr-[10px] md:float-left bg-pallet-accent object-cover'
            }
          />
          {ABOUT_ME.text.split('\n').map((para) => {
            return (
              <p className={'mt-[1rem] text-justify md:columns-0 xl:columns-1'}>
                {para}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
