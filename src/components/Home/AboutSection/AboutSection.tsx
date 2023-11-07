import React from 'react';
import { ABOUT_ME } from '../../../data/about_me';

// TODO: UPDATE THE COPY

function AboutSection() {
  return (
    <section className={'bg-pallet-primary-light'}>
      <div className={'w-full h-fit '}>
        <h2>@About Me&gt;_</h2>
        <div
          className={
            'w-full h-fit flex flex-col md:block items-start justify-start'
          }>
          <img
            src='/profile_image.svg'
            alt=''
            className={
              'shrink-0 aspect-[4/5] md:aspect-[1/1] xl:aspect-[1/1] w-full max-w-[400px] h-auto md:mr-[10px] md:float-left bg-pallet-accent object-cover'
            }
          />
          <h3 className={'!text-2xl'}>{ABOUT_ME.title}</h3>
          {ABOUT_ME.text.split('\n').map((para, index) => {
            return (
              <p
                key={`about_me_para_${index}`}
                className={'mt-[1rem] text-justify md:columns-0 xl:columns-1'}>
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
