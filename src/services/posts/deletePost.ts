import { api } from "../api";

export async function deletePost(id: number) {
  await api.delete(`/admin/posts/${id}`);
}
