import React from 'react';

function BlogPostHeroSection() {
  return (
    <section>
      <h2>This is another section; but with an image</h2>
      <figure className='sticky top-[0px] w-full h-fit bg-pallet-secondary'>
        <img
          src=''
          alt='this is an image'
          className='aspect-[4/3] w-full h-auto'
        />
        <caption>Section Image</caption>
      </figure>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
        perferendis omnis. Exercitationem dolor consequatur adipisci dolores,
        vero sapiente nam rem tempore debitis repellendus provident voluptatum
        dolorem distinctio quam et fugit ex modi placeat necessitatibus vitae
        rerum ad facere? Ut autem animi minima! Qui repellat pariatur eius! Quae
        laboriosam deserunt molestiae nisi! Illum nulla, quia distinctio ipsa et
        nisi tenetur veniam odio, ipsam quo error quam adipisci praesentium
        beatae voluptatibus fugiat eos possimus quaerat iure atque natus a. Quo
        error cumque veniam voluptatum rerum animi, deserunt rem voluptatem
        accusantium! Consequuntur eaque soluta corrupti unde praesentium. Quia
        molestias a voluptatibus quas vel.
      </p>
      <h3>External Links</h3>
      <ul className='!list-disc'>
        <li>
          <a href='/'>Something</a>
        </li>
        <li>
          <a href='/'>Another thing</a>
        </li>
        <li>
          <a href='/'>Something Else</a>
        </li>
      </ul>
    </section>
  );
}

export default BlogPostHeroSection;
