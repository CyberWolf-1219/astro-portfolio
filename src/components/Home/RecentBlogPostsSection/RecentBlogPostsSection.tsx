import React from 'react';
import BlogPostSnippetCard from '../../Blog/BlogPostSnippetCard/BlogPostSnippetCard';
import { RECENT_BLOG_POSTS } from '../../../data/recent_blog_posts';

function RecentBlogPostsSection() {
  return (
    <section>
      <div>
        <h2>@Recent Blog Posts Section&gt;_</h2>
        <ul
          className={
            'w-full h-fit flex flex-row items-center justify-start gap-[10px] md:grid grid-cols-2 lg:grid-cols-3 overflow-x-auto snap-x'
          }>
          {RECENT_BLOG_POSTS.length > 0 ? (
            RECENT_BLOG_POSTS.map((post) => {
              return (
                <li
                  key={`recent_blog_post_${Math.random()}`}
                  className={
                    'shrink-[0] w-full h-fit snap-start snap-mandatory'
                  }>
                  <BlogPostSnippetCard />
                </li>
              );
            })
          ) : (
            <code
              className={
                'w-full h-fit p-[2rem] text-xl text-pallet-accent border-[5px] border-pallet-accent'
              }>
              <span>&#58;&#40;&nbsp;ERROR</span>
              <br />
              <span>&lt;NO BLOG POSTS HAS BEEN UPLOADED YET/&gt;</span>
            </code>
          )}
        </ul>
      </div>
    </section>
  );
}

export default RecentBlogPostsSection;
