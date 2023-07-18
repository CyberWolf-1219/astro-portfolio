import React from 'react';

function BlogPostSnippetCard() {
  return (
    <article className={'aspect-[9/10] w-full h-auto bg-pallet-primary-light'}>
      <img
        src=''
        alt=''
        className={'aspect-[4/3] w-full h-auto bg-pallet-accent '}
      />
      <div
        className={
          'w-full h-full p-[10px] flex flex-col items-start justify-start'
        }>
        <h1 className={'w-full h-fit !mt-0 !text-xl'}>
          Blog Post Title Goes Here
        </h1>
        <p className={'text-justify line-clamp-[10]'}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
          cupiditate a eos in quidem unde quam. Deleniti aperiam saepe rerum
          dolor alias ipsum, tempora distinctio eum iusto vitae fuga molestiae
          maiores recusandae consequuntur. Dolor rerum explicabo neque sequi.
          Impedit velit commodi mollitia fugit esse? Ab ut voluptates ad dicta
          laborum?
        </p>
      </div>
      <div
        className={
          'w-full h-fit p-[10px] pt-[0] flex flex-row items-center justify-between'
        }>
        <p className={'w-max h-fit text-sm whitespace-nowrap'}>2023-JUNE-15</p>
        <a
          href='/blog/blog-post-1'
          className={'w-full h-fit text-right'}>
          Read Post &gt;&gt;
        </a>
      </div>
    </article>
  );
}

export default BlogPostSnippetCard;
