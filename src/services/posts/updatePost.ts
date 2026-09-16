import type { PostEditSchema } from "../../components/pages/PostEdit/postEdit.schema";
import { api } from "../api";

export async function updatePost(id: number, data: PostEditSchema) {
  const response = await api.put(`/admin/posts/${id}`, data);
  return response.data;
}
