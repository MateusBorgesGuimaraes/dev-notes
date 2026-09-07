import type { Comment } from "../../types/comments";
import { api } from "../api";

export async function fetchApprovedCommentsByPost(postId: number) {
  const response = await api.get<Comment[]>(`/posts/${postId}/comments`);
  return response.data;
}
