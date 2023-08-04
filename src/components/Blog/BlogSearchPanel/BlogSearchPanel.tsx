import React, { useState } from 'react';
import BlogSearchResultPanel from '../BlogSearchResultPanel/BlogSearchResultPanel';
import BlogSearchEngine from '../BlogSearchEngine/BlogSearchEngine';
import type { BlogPostSnippet } from '../../../types';
import { DUMMY_POSTS } from '../../../data/blog';

function BlogSearchPanel() {
  const [filteredBlogPosts, setFilteredBlogPosts] =
    useState<Array<BlogPostSnippet>>(DUMMY_POSTS);

  function filteredPostsReciever(posts: BlogPostSnippet[]) {
    setFilteredBlogPosts(posts);
  }

  return (
    <section
      className={
        'w-full h-full p-[10px] bg-pallet-primary-light/50 backdrop-blur-[10px]'
      }>
      <div>
        <BlogSearchEngine
          allBlogPosts={DUMMY_POSTS}
          postReciever={filteredPostsReciever}
        />
        <BlogSearchResultPanel blogPosts={filteredBlogPosts} />
      </div>
    </section>
  );
}

export default BlogSearchPanel;
