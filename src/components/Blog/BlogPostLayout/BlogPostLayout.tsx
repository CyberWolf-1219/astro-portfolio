import React from 'react';
import type { BlogPostSkeleton } from '../../../types';
import type {
  Asset,
  Entry,
  ResolvedAssetLink,
  ResolvedEntryLink,
} from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

interface Props {
  post: Entry<BlogPostSkeleton>;
}
function BlogPostLayout({ post }: Props) {
  console.log(post);
  return (
    <article className={'w-full max-w-screen-lg h-fit mx-auto mt-[5rem]'}>
      <header className={'mb-[5rem]'}>
        <img
          src={(post.fields.heroImage as Asset).fields.file?.url as string}
          alt={(post.fields.heroImage as Asset).fields.description as string}
        />
        <h1>{post.fields.title as string}</h1>
        <p className={'mb-[1rem]'}>
          <small>{post.fields.createdDate as string}</small>
        </p>
        <ul
          className={
            'w-full h-fit flex flex-row items-center justify-start gap-[1rem]'
          }>
          {(post.fields.tags as string[]).map((tag, i) => {
            return (
              <li
                key={`post_tag_${Math.random()}`}
                className={
                  'w-fit h-fit px-[0.75rem] py-[0.25rem] bg-pallet-primary-light rounded-full'
                }>
                {tag}
              </li>
            );
          })}
        </ul>
      </header>
      {documentToReactComponents(post.fields.content)}
    </article>
  );
}

export default BlogPostLayout;
