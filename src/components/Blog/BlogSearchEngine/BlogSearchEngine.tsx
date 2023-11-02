import React, { FormEvent, useEffect, useRef } from 'react';
import ProgressBar from './ProgressBar';
import type { BlogPostSkeleton } from '../../../types';
import type { Entry } from 'contentful';

interface Props {
  allBlogPosts: Entry<BlogPostSkeleton>[];
  postReciever: (filteredPosts: Entry<BlogPostSkeleton>[]) => void;
}

function BlogSearchEngine({ allBlogPosts, postReciever }: Props) {
  const timeOut = useRef<NodeJS.Timeout>();
  const progressbar = useRef<HTMLDivElement>(null);

  function setProgress(currentProgress: number, fullProgress: number) {
    const progress = (currentProgress / fullProgress) * 100;
    progressbar.current!.style.transform = `scaleX(${progress}%)`;
  }

  function resetProgressBar() {
    progressbar.current!.style.transform = `scaleX(${0}%)`;
  }

  function filterPosts(query: string) {
    const filterPosts = allBlogPosts.filter((post, index) => {
      setProgress(index + 1, allBlogPosts.length);
      const tags = post.fields.tags;
      const title = post.fields.title;

      const isAMatch =
        (title as string).includes(query) || (tags as string[]).includes(query);

      if (isAMatch) {
        return post;
      }
    });

    postReciever(filterPosts);
  }

  function queuePostSearch(query: string) {
    if (timeOut.current) {
      clearTimeout(timeOut.current);
    }

    timeOut.current = setTimeout(() => {
      filterPosts(query.toLowerCase());
    }, 500);
  }

  function onQueryEnter(e: FormEvent<HTMLInputElement>) {
    const query = e.currentTarget.value;
    resetProgressBar();
    queuePostSearch(query);
  }

  return (
    <form className={'sticky top-[0] z-[50] w-full h-fit bg-pallet-accent/90'}>
      <ProgressBar ref={progressbar} />
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
