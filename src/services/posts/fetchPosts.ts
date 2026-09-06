import { api } from "../api";
import type { Post } from "../../types/post";

interface FetchPostsParams {
  page: number;
  limit: number;
}

export async function fetchPosts({ page, limit }: FetchPostsParams) {
  const offset = (page - 1) * limit;

  const response = await api.get<Post[]>("/posts", {
    params: { limit, offset },
  });

  return response.data;
}
