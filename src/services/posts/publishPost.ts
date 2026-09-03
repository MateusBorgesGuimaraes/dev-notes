import { api } from "../api";
import type { Post } from "../../types/post";

export async function publishPost(id: number) {
  const response = await api.patch<Post>(`/admin/posts/${id}/publish`);
  return response.data;
}
