import { api } from "../api";

export async function addTagToPost(postId: number, tagId: number) {
  await api.post(`/admin/posts/${postId}/tags`, { tag_id: tagId });
}
