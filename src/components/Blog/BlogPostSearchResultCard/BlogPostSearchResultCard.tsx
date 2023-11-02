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
      className={`BlogPostSearchResultCard aspect-[9/16] w-full h-auto p-[10px] flex flex-col items-center justify-start gap-[10px] bg-pallet-accent/50 border-[2px] border-pallet-accent overflow-hidden delay-[${animationDelay}ms]`}>
      <h1
        className={'w-full h-fit !my-[0px] !text-2xl !font-semibold underline'}>
        {post.fields.title as string}
      </h1>
      <p className={'w-full h-fit text-left'}>
        <small>{post.fields.createdDate as string}</small>
      </p>
      <img
        src={`https:${(post.fields.heroImage as Asset).fields.file?.url}`}
        alt=''
        className={'shrink-0 aspect-[4/3] w-full h-auto bg-pallet-primary'}
      />
      <p className={'w-full h-fit text-justify line-clamp-[9]'}>
        {documentToReactComponents(post.fields.content)}
      </p>
      <p className={'w-full h-fit mt-auto text-left'}>
        <a
          href={`/blog/${post.sys.id}`}
          className={'font-bold'}>
          Read Post &gt;&gt;
        </a>
      </p>
    </article>
  );
}

export default BlogPostSearchResultCard;
