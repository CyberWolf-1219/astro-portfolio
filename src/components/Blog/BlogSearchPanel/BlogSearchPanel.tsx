import React, { useEffect, useState } from 'react';
import BlogSearchResultPanel from '../BlogSearchResultPanel/BlogSearchResultPanel';
import BlogSearchEngine from '../BlogSearchEngine/BlogSearchEngine';
import ErrorBoundry from '../../Common/ErrorBoundry/ErrorBoundry';
import { Contentful } from '../../../lib/contentful';
import type { BlogPostSkeleton } from '../../../types';
import type { Entry } from 'contentful';

const CONTENTFUL = new Contentful();
const entry_types = await CONTENTFUL.entryTypes();
console.log(entry_types?.items[0]);

function BlogSearchPanel() {
  const [blogPosts, setBlogPosts] = useState<Entry<BlogPostSkeleton>[]>([]);
  const [filteredBlogPosts, setFilteredBlogPosts] = useState<
    Entry<BlogPostSkeleton>[]
  >([]);

  useEffect(() => {
    (async () => {
      const entries = await CONTENTFUL.getEntries();
      console.log(entries?.items[0].fields);
      setBlogPosts(entries?.items!);
    })();
  }, []);

  function recieveFilteredPosts(filteredPosts: Entry<BlogPostSkeleton>[]) {
    setFilteredBlogPosts(filteredPosts);
  }

  return (
    <section
      className={
        'w-full h-full p-[10px] bg-pallet-primary-light/50 backdrop-blur-[10px]'
      }>
      <div>
        <ErrorBoundry>
          <BlogSearchEngine
            allBlogPosts={blogPosts}
            postReciever={recieveFilteredPosts}
          />
        </ErrorBoundry>
        <ErrorBoundry>
          <BlogSearchResultPanel blogPosts={[]} />
        </ErrorBoundry>
      </div>
    </section>
  );
}

export default BlogSearchPanel;

// TODO: PASS BLOG POST ENTRIES TO THE SEARCH RESULT PANEL
// TODO: PASS BLOG POST ENTIRES TO SEARCH ENGINE
