export type PostStatus = "draft" | "published" | "archived";

export interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  cover_image_url: string | null;
  status: PostStatus;
  author_id: number;
  published_at: string | null;
  created_at: string;
  tags: string | null;
  updated_at: string;
}

export interface PostTag {
  id: number;
  name: string;
  slug: string;
}

export interface IndividualPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  cover_image_url: string;
  status: string;
  author_id: number;
  published_at: string | null;
  created_at: string;
  updated_at: string;
  author_name: string;
  tags: PostTag[];
}
