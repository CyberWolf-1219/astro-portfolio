import React, { useEffect, useState } from 'react';
import BlogPostHeroSection from '../BlogPostHeroSection/BlogPostHeroSection';
import BlogPostSubSection from '../BlogPostSubSection/BlogPostSubSection';
import type { BlogPost, BlogPostSection } from '../../types';
import axios from 'axios';
import { BLOG_POSTS } from '../../data/blogposts';

interface Props {
  postID: number;
}

function BlogPostLayout({ postID }: Props) {
  const [blogPost, setBlogPost] = useState<BlogPost>(BLOG_POSTS[0]);

  useEffect(() => {
    async function fetchPostSections() {
      const RESPONSE = await axios.get('api/blog', { params: { post_id: 1 } });
      console.group('BLOGPOST SECTION FETCH');
      console.log(RESPONSE);
      console.groupEnd();
    }
    console.group('BLOG POST');
    console.log(blogPost);
    console.groupEnd();
  }, [blogPost]);

  return (
    <>
      {blogPost.sections.map((section, index) => {
        if (section.type == 'hero') {
          return <BlogPostHeroSection />;
        } else {
          return <BlogPostSubSection data={section} />;
        }
      })}
    </>
  );
}

export default BlogPostLayout;
