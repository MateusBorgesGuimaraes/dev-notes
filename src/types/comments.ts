export type Comment = {
  id: number;
  post_id: number;
  author_name: string;
  content: string;
  status: CommentStatus;
  created_at: string;
};

export type CommentStatus = "pending" | "approved" | "spam";
