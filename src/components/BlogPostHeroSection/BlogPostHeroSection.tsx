import React from 'react';

interface Props {
  heading: string;
  image: { link: string; caption: string };
  summaryText: string[];
  createdDate: string;
  author: string;
}

function BlogPostHeroSection({
  heading,
  image,
  summaryText,
  createdDate,
  author,
}: Props) {
  return (
    <section>
      <h1>{heading}</h1>
      <ul>
        <li>
          <small>{createdDate}</small>
        </li>
        <li>
          <small>{author}</small>
        </li>
      </ul>
      <figure className='sticky top-[0px] w-full h-fit bg-pallet-secondary'>
        <img
          src={image.link}
          alt={image.caption}
          className='aspect-[4/3] w-full h-auto'
        />
        <caption>{image.caption}</caption>
      </figure>
      <p>{summaryText}</p>
    </section>
  );
}

export default BlogPostHeroSection;
