export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  name: string;
  description: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
};
