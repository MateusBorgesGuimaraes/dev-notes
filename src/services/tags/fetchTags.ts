import type { Tag } from "../../types/tags";
import { api } from "../api";

export async function fetchTags() {
  const response = await api.get<Tag[]>(`/tags`);
  return response.data;
}
