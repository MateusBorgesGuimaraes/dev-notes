import { api } from "../api";
import type { IndividualPost } from "../../types/post";

export async function fetchPostById(id: number) {
  const response = await api.get<IndividualPost>(`/posts/id/${id}`);
  return response.data;
}
