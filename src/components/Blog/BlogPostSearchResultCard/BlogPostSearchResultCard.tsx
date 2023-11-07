import React from 'react';
import './style.css';
import type { BlogPostSkeleton } from '../../../types';
import type { Asset, Entry } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

interface Props {
  postIndex: number;
  post: Entry<BlogPostSkeleton>;
  animationDelay: number;
}

function BlogPostSearchResultCard({ postIndex, post, animationDelay }: Props) {
  console.log(post.fields);

  return (
    <article
      style={{ animationDelay: `${animationDelay}ms` }}
      className={`BlogPostSearchResultCard aspect-[10/3] w-full h-auto p-[1rem] flex flex-col md:flex-row items-center justify-start gap-[1rem] bg-pallet-accent/50 border-[2px] border-pallet-accent overflow-hidden delay-[${animationDelay}ms]`}>
      <div className={'aspect-[4/3] md:aspect-[1/1] w-auto h-full'}>
        <img
          src={`https:${(post.fields.thumbnail as Asset).fields.file?.url}`}
          alt=''
          className={
            'shrink-0 aspect-[4/3] md:aspect-[1/1] w-full h-auto bg-pallet-primary'
          }
        />
      </div>
      <div className={'w-full h-full'}>
        <h1
          className={
            'w-full h-fit !m-[0px] !text-2xl !font-semibold underline'
          }>
          {post.fields.title as string}
        </h1>
        <p className={'w-full h-fit text-left'}>
          <small>{post.fields.createdDate as string}</small>
        </p>
        {documentToReactComponents(post.fields.content.content[0])}
        <p className={'line-clamp-4'}>
          {post.fields.content.content[1].content[0].value}
        </p>
        <p className={'w-full h-fit mt-auto text-left'}>
          <a
            href={`/blog/${post.sys.id}/${post.fields.slug}`}
            className={'font-bold'}>
            Read Post &gt;&gt;
          </a>
        </p>
      </div>
    </article>
  );
}

export default BlogPostSearchResultCard;
