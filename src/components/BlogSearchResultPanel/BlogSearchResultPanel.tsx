import React from 'react';
import BlogPostSearchResultCard from '../BlogPostSearchResultCard/BlogPostSearchResultCard';
import type { BlogPostSnippet } from '../../types';

interface Props {
  blogPosts: Array<BlogPostSnippet>;
}

function BlogSearchResultPanel({ blogPosts }: Props) {
  return (
    <ul
      className={
        'w-full h-full mt-[15px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[10px] overflow-y-auto'
      }>
      {blogPosts.map((blogPost, index) => {
        return (
          <li
            key={`blog_search_result_${Math.random()}`}
            className={'w-full h-fit overflow-hidden'}>
            <BlogPostSearchResultCard
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
