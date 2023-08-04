import React, { useEffect, useState } from 'react';
import BlogPostHeroSection from '../BlogPostHeroSection/BlogPostHeroSection';
import BlogPostSubSection from '../BlogPostSubSection/BlogPostSubSection';
import axios from 'axios';
import { BLOG_POSTS } from '../../../data/blogposts';
import type { BlogPost } from '../../../types';

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
          return (
            <BlogPostHeroSection
              heading={section.heading}
              image={section.image!}
              summaryText={section.text}
              createdDate={blogPost.createdDate}
              author={blogPost.author}
            />
          );
        } else {
          return <BlogPostSubSection data={section} />;
        }
      })}
    </>
  );
}

export default BlogPostLayout;
