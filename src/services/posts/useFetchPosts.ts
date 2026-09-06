import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "./fetchPosts";

const POSTS_PER_PAGE = 9;

export function useFetchPosts(page: number) {
  return useQuery({
    queryKey: ["public-posts", page],
    queryFn: () => fetchPosts({ page, limit: POSTS_PER_PAGE }),
    placeholderData: (previousData) => previousData,
  });
}

export { POSTS_PER_PAGE };
