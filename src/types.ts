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
  title: string;
  image: {
    link: string;
    caption: string;
  };
};

export type ServiceCategory = {
  category: string;
  services: Service[];
};
