// Represents a single article
export type Article = {
  id: number;
  title: string;
  slug: string;
  author: string;
  image: string;
  date: string; // could also use Date if you parse it
  category: string;
  summary: string;
  readTime: number;
  tags: string[];
  likes: number;
};
