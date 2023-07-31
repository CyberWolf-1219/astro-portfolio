import React, { FormEvent, useRef } from 'react';
import type { BlogPostSnippet } from '../../types';

interface Props {
  allBlogPosts: BlogPostSnippet[];
  postReciever: (posts: BlogPostSnippet[]) => void;
}

function BlogSearchEngine({ allBlogPosts, postReciever }: Props) {
  const timeOut = useRef<number>();
  const progressbar = useRef<HTMLDivElement>(null);

  function filterPosts(query: string) {
    const filterPosts = allBlogPosts.filter((post, index) => {
      const TAG_MATCH = post.tags.find((tag) => {
        return tag.toLowerCase() == query;
      });
      const TITLE_MATCH = post.title.includes(query);

      if (TAG_MATCH || TITLE_MATCH) {
        return post;
      }

      const progress = ((index + 1) / allBlogPosts.length) * 100;
      progressbar.current!.style.transform = `scaleX(${progress}%)`;
    });

    postReciever(filterPosts);
  }

  function onQueryEnter(e: FormEvent<HTMLInputElement>) {
    progressbar.current!.style.transform = `scaleX(${0}%)`;
    const query = e.currentTarget.value;

    if (timeOut.current) {
      clearTimeout(timeOut.current);
    }

    timeOut.current = setTimeout(() => {
      filterPosts(query.toLowerCase());
    }, 500);
  }

  return (
    <form className={'sticky top-[0] z-[50] w-full h-fit bg-pallet-accent/90'}>
      <div className={'absolute inset-0 z-[1] p-[5px] overflow-hidden'}>
        <div
          ref={progressbar}
          className={
            'w-[100%] h-full bg-pallet-accent origin-left scale-x-[0%] transition-transform duration-[100ms] ease-linear'
          }></div>
      </div>
      <input
        type='text'
        name='query'
        id='query_input'
        placeholder={'Search'}
        onChange={onQueryEnter}
        className={
          'relative z-[2] w-full h-fit !text-lg !px-[0.25em] !py-[0.3em] border-[2px] bg-transparent mix-blend-difference'
        }
      />
    </form>
  );
}

export default BlogSearchEngine;
