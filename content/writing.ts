export interface WritingPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readTimeMinutes?: number;
  externalUrl?: string;
}

export const writingPosts: WritingPost[] = [];
