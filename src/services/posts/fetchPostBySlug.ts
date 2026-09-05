import type { IndividualPost } from "../../types/post";
import { api } from "../api";

export async function fetchPostBySlug(slug: string) {
  const response = await api.get<IndividualPost>(`/posts/${slug}`);

  return response.data;
}
