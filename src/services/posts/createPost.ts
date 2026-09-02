import { api } from "../api";
import type { PostNewSchema } from "../../components/pages/PostNew/postNew.schema";

export async function createPost(data: PostNewSchema) {
  const response = await api.post("/admin/posts", data);
  return response.data;
}
