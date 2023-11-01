import type { Asset, EntryFieldTypes } from 'contentful';

export type EducationData = {
  course: string;
  description: {
    title: string;
    desc: string;
  };
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

export type BlogPostSkeleton = {
  contentTypeId: "post";
  fields: {
    title: EntryFieldTypes.Text;
    content: EntryFieldTypes.RichText;
    createdDate: EntryFieldTypes.Date;
    published: EntryFieldTypes.Boolean;
    tags: EntryFieldTypes.Array<EntryFieldTypes.Symbol<string>>;
    heroImage: Asset;
  }
}

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
