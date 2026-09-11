import { api } from "../api";

export async function deleteComment(commentId: number) {
  const response = await api.delete(`/admin/comments/${commentId}`);
  return response.data;
}
