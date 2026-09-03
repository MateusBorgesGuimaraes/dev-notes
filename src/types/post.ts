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
  updated_at: string;
}
