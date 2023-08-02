export type EducationData = {
  course: string;
  description: string;
  link: string;
};

export type BlogPostSnippet = {
  title: string;
  postedDate: string;
  img: string;
  snippet: string;
  tags: string[];
  link: string;
};

export type BlogPost = {
  postID: number;
  createdDate: string;
  author: string;
  sections: BlogPostSection[];
};

export type BlogPostSection = {
  type: 'hero' | 'sub';
  heading: string;
  text: string[];
  image?: {
    link: string;
    caption: string;
  };
  links?: Array<{ caption: string; link: string }>;
};

export type Service = {
  serviceTitle: string;
  serviceImage: {
    imageLink: string;
    imageCaption: string;
  };
};

export type ServiceCategory = {
  categoryID: string;
  categoryName: string;
  categoryImage: { imageLink: string; imageCaption: string };
  categoryServices: Service[];
};

export type FeaturedProject = {
  projectTitle: string;
  projectImage: {
    imageLink: string;
    imageCaption: string;
  };
  projectLink: string;
};

export type RecentBlogPost = {
  postID: string;
  postTitle: string;
  postImage: {
    imageLink: string;
    imageCaption: string;
  };
  postSnippet: string;
  postLink: string;
};
