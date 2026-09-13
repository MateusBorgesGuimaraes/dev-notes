import { api } from "../api";

export async function removeTagFromPost(postId: number, tagId: number) {
  await api.delete(`/admin/posts/${postId}/tags/${tagId}`);
}
