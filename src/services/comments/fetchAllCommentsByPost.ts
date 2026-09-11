import type { Comment } from "../../types/comments";
import { api } from "../api";

export async function fetchAllCommentsByPost(postId: number) {
  const response = await api.get<Comment[]>(`/admin/posts/${postId}/comments`);
  return response.data;
}
