import React from 'react';

function AboutSection() {
  return (
    <section>
      <div className={'w-full h-fit'}>
        <h2>@About Section&gt;_</h2>
        <div
          className={
            'w-full h-fit flex flex-col lg:flex-row items-start justify-start'
          }>
          <img
            src='/profile_image.svg'
            alt=''
            className={
              'shrink-0 aspect-[4/5] md:aspect-[1/1] xl:aspect-[4/3] w-full max-w-[400px] h-auto md:mr-[10px] md:float-left lg:float-none bg-pallet-accent object-cover'
            }
          />
          <p className={'text-justify md:columns-0 lg:columns-2 xl:columns-1'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolore
            aliquam omnis quae illo sed, obcaecati quos autem pariatur suscipit
            deleniti assumenda eligendi unde incidunt. Adipisci commodi
            delectus, ratione doloremque temporibus sit dignissimos ab, veniam
            et voluptates provident? Eaque laudantium, natus nesciunt quod non
            tempore nisi culpa molestiae sit modi aspernatur ullam a, nihil
            animi? Iusto aperiam quibusdam perspiciatis velit laboriosam
            explicabo expedita impedit, aliquam maxime facilis laborum ipsum
            libero cumque ad adipisci officiis, repellat beatae deserunt magnam
            nihil sapiente animi! Ipsum, debitis aspernatur voluptates delectus
            nam, pariatur laudantium fugiat, dicta illum porro necessitatibus
            reiciendis repellat nemo expedita molestias soluta.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
