import { api } from "../api";

export async function deleteTag(id: number) {
  const response = await api.delete(`/admin/tags/${id}`);

  return response.data;
}
