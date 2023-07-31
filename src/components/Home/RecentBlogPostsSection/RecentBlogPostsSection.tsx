import React from 'react';
import BlogPostSnippetCard from '../../Blog/BlogPostSnippetCard/BlogPostSnippetCard';

function RecentBlogPostsSection() {
  return (
    <section>
      <div>
        <h2>@Recent Blog Posts Section&gt;_</h2>
        <ul
          className={
            'w-full h-fit flex flex-row items-center justify-start gap-[10px] md:grid grid-cols-2 lg:grid-cols-3 overflow-x-auto snap-x'
          }>
          <li className={'shrink-[0] w-full h-fit snap-start snap-mandatory'}>
            <BlogPostSnippetCard />
          </li>
          <li className={'shrink-[0] w-full h-fit snap-start snap-mandatory'}>
            <BlogPostSnippetCard />
          </li>
          <li className={'shrink-[0] w-full h-fit snap-start snap-mandatory'}>
            <BlogPostSnippetCard />
          </li>
          <li className={'shrink-[0] w-full h-fit snap-start snap-mandatory'}>
            <BlogPostSnippetCard />
          </li>
          <li className={'shrink-[0] w-full h-fit snap-start snap-mandatory'}>
            <BlogPostSnippetCard />
          </li>
          <li className={'shrink-[0] w-full h-fit snap-start snap-mandatory'}>
            <BlogPostSnippetCard />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default RecentBlogPostsSection;
