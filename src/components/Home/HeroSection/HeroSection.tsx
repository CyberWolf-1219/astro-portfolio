import React from 'react';
import HeroMainElement from '../HeroMainElement/HeroMainElement';

function HeroSection() {
  return (
    <section
      id={'hero'}
      className={'w-full min-h-[80vh] md:h-fit'}>
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
              'text-center !text-3xl md:text-left md:!text-4xl lg:!text-6xl text-pallet-light'
            }>
            Full-Stack Typescript Developer
          </h1>

          <p className={'max-w-[55ch] text-center md:text-left'}>
            Lets turn that idea of yours into reality together.
          </p>
          <ul
            className={
              'w-full h-fit mt-[1rem] flex flex-row items-center justify-center md:justify-start gap-[1rem]'
            }>
            <li>
              <a
                href={'mailto:lahirua.rajakaruna@gmail.com'}
                className={
                  'w-fit h-fit px-[1em] py-[0.4em] bg-pallet-accent font-semibold leading-[1] border-[2px] border-transparent hover:bg-transparent hover:text-white hover:border-pallet-accent transition-all duration-300'
                }>
                WORK WITH ME
              </a>
            </li>
            <li>
              <a
                href={'https://www.linkedin.com/in/lahiru-anjana-rajakaruna/'}
                target={'_blank'}
                className={'w-fit h-fit '}>
                <img
                  src='/icon-linkedin.svg'
                  alt='linked-in icon svg'
                  className={
                    'aspect-[1/1] w-[2rem] h-auto hover:scale-[1.1] transition-transform duration-300'
                  }
                />
              </a>
            </li>
            <li>
              <a
                href={'https://twitter.com/Lahiru_A_R'}
                target={'_blank'}
                className={'w-fit h-fit '}>
                <img
                  src='/icon-twitter.svg'
                  alt='github icon svg'
                  className={
                    'aspect-[1/1] w-[2rem] h-auto hover:scale-[1.1] transition-transform duration-300'
                  }
                />
              </a>
            </li>
            <li>
              <a
                href={'https://github.com/CyberWolf-1219'}
                target={'_blank'}
                className={'w-fit h-fit '}>
                <img
                  src='/icon-github.svg'
                  alt='github icon svg'
                  className={
                    'aspect-[1/1] w-[2rem] h-auto hover:scale-[1.1] transition-transform duration-300'
                  }
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
