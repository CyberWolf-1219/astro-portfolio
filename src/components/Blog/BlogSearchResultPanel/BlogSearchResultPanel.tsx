import React from 'react';
import BlogPostSearchResultCard from '../BlogPostSearchResultCard/BlogPostSearchResultCard';
import type { BlogPostSkeleton } from '../../../types';
import type { Entry } from 'contentful';

interface Props {
  blogPosts: Entry<BlogPostSkeleton>[];
}
function BlogSearchResultPanel({ blogPosts }: Props) {
  return (
    <ul
      className={
        'w-full h-full mt-[15px] flex flex-col gap-[2rem] overflow-y-auto'
      }>
      {blogPosts.map((blogPost, index) => {
        return (
          <li
            key={`blog_search_result_${Math.random()}`}
            className={'w-full h-fit overflow-hidden'}>
            <BlogPostSearchResultCard
              postIndex={index}
              post={blogPost}
              animationDelay={index * 100}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default BlogSearchResultPanel;
