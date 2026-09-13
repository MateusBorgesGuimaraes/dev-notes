import type { Tag } from "../../types/tags";
import { api } from "../api";

export async function fetchPostTags(postId: number) {
  const response = await api.get<Tag[]>(`/posts/${postId}/tags`);
  return response.data;
}
