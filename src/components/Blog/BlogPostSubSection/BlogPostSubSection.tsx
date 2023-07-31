import React from 'react';
import type { BlogPostSection } from '../../types';

interface Props {
  data: BlogPostSection;
}

function BlogPostSubSection({ data }: Props) {
  return (
    <section>
      <div>
        <h2>{data.heading}</h2>
        {/* IF THERE IS AN IMAGE RENDER IT */}
        {data.image ? (
          <figure>
            <img
              src={data.image.link}
              alt={data.image.caption}
            />
          </figure>
        ) : null}
        {/* RENDER THE SECTION PARAGRAPHS */}
        <div
          className={
            'w-full h-fit flex flex-col items-center justify-start gap-[1rem]'
          }>
          {data.text.map((paragraph, index) => {
            return (
              <p
                key={`paragraph_${index}`}
                className='w-full h-fit text-justify'>
                {paragraph}
              </p>
            );
          })}
        </div>
        {/* IF THERE ARE EXTERNAL LINKS RENDER THEM */}
        {data.links ? (
          <>
            <h3 className={'w-full h-fit border-t-[1px] border-pallet-accent'}>
              External Resources
            </h3>
            <ul
              className={
                'w-full h-fit mt-[1rem] border-y-[1px] border-pallet-accent'
              }>
              {data.links.map((link, index) => {
                return (
                  <li
                    key={`link_${index}`}
                    className={'truncate'}>
                    <span>[{link.caption}]:&nbsp;</span>
                    <a href={link.link}>({link.link})</a>
                  </li>
                );
              })}
            </ul>
          </>
        ) : null}
      </div>
    </section>
  );
}

export default BlogPostSubSection;
