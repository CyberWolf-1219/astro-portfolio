import React from 'react';

function HeroSection() {
  return (
    <section>
      <div>
        <h1>Transform Your Idea Into A Reality</h1>
        <div className={'aspect-[1/1] w-[100%] h-auto bg-pallet-accent/50'}>
          <img
            src='/hero_bg.jpg'
            alt='hero image'
            className={'w-full h-full object-cover object-right'}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
