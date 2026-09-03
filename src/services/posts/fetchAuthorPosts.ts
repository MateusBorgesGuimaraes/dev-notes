import { api } from "../api";
import type { Post } from "../../types/post";

interface FetchAuthorPostsParams {
  page: number;
  limit: number;
}

export async function fetchAuthorPosts({
  page,
  limit,
}: FetchAuthorPostsParams) {
  const offset = (page - 1) * limit;

  const response = await api.get<Post[]>("/admin/posts/author", {
    params: { limit, offset },
  });

  return response.data;
}
