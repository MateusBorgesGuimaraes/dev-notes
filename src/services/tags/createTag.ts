import { textToSlug } from "../../utils/textToSlug";
import { api } from "../api";
import type { TagSchema } from "./tag.schema";

export async function createTag({ name }: TagSchema) {
  const slug = textToSlug(name);
  const response = await api.post(`/admin/tags`, { name, slug });
  return response.data;
}
