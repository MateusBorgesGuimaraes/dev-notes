import { useQuery } from "@tanstack/react-query";
import { fetchAuthorPosts } from "./fetchAuthorPosts";

const POSTS_PER_PAGE = 5;

export function useAuthorPosts(page: number) {
  return useQuery({
    queryKey: ["author-posts", page],
    queryFn: () => fetchAuthorPosts({ page, limit: POSTS_PER_PAGE }),
    placeholderData: (previousData) => previousData,
  });
}

export { POSTS_PER_PAGE };
