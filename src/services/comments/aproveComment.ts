import { api } from "../api";

export async function aproveComment(commentId: number) {
  const response = await api.patch(`/admin/comments/${commentId}/approve`);
  return response.data;
}
